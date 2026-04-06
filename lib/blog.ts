import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  category?: string;
  tags?: string[];
  cover?: string;
  updatedAt?: string;
  draft?: boolean;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  cover?: string;
  updatedAt?: string;
  draft: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function normalizeTags(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((tag) => String(tag).trim())
    .filter(Boolean)
    .map((tag) => tag.toLowerCase());
}

function normalizeFrontMatter(data: Record<string, unknown>, slug: string): BlogPostMeta {
  const title = String(data.title ?? slug);
  const date = String(data.date ?? "");
  const excerpt = String(data.excerpt ?? "");
  const tags = normalizeTags(data.tags);
  const author = String(data.author ?? "Ives Tan Kian Hang");
  const category = String(data.category ?? (tags[0] ? tags[0] : "general"));
  const cover = data.cover ? String(data.cover) : undefined;
  const updatedAt = data.updatedAt ? String(data.updatedAt) : undefined;
  const draft = Boolean(data.draft);

  return {
    slug,
    title,
    date,
    excerpt,
    author,
    category,
    tags,
    cover,
    updatedAt,
    draft
  };
}

function sortDate(post: BlogPostMeta): number {
  const sourceDate = post.updatedAt || post.date;
  return new Date(sourceDate).getTime();
}

export function toHeadingId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[`*_~()[\]{}]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getTableOfContents(markdown: string): TocItem[] {
  const lines = markdown.split(/\r?\n/);
  const seenIds = new Map<string, number>();
  const items: TocItem[] = [];

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const text = match[2]
      .replace(/[`*_~]/g, "")
      .replace(/\[(.*?)\]\(.*?\)/g, "$1")
      .trim();

    if (!text) continue;

    const baseId = toHeadingId(text);
    const count = seenIds.get(baseId) ?? 0;
    seenIds.set(baseId, count + 1);
    const id = count > 0 ? `${baseId}-${count + 1}` : baseId;

    items.push({ id, text, level });
  }

  return items;
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const files = fs.readdirSync(blogDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return normalizeFrontMatter(data as Record<string, unknown>, slug);
    })
    .filter((post) => !post.draft)
    .sort((a, b) => sortDate(b) - sortDate(a));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const postMeta = normalizeFrontMatter(data as Record<string, unknown>, slug);

  if (postMeta.draft) {
    return null;
  }

  return {
    ...postMeta,
    content
  };
}
