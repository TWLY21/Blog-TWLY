# Blog-TWLY

[![CI](https://github.com/TWLY21/Blog-TWLY/actions/workflows/ci.yml/badge.svg)](https://github.com/TWLY21/Blog-TWLY/actions/workflows/ci.yml)

Premium editorial-style portfolio blog built with Next.js App Router.

The site combines:

- typography-first blog presentation
- integrated project showcase
- markdown-based publishing workflow
- light/dark editorial themes

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Markdown via `gray-matter` + `react-markdown`

## Features

- Editorial blog layout:
  - featured story
  - secondary posts grid
  - latest article feed
  - related posts
- Project showcase section with role, stack, and repository links
- Dark mode toggle in top navigation
- Responsive design for desktop, tablet, and mobile

## Routes

- `/` Home
- `/projects` Project index
- `/blog` Blog index
- `/blog/[slug]` Blog article page

## Local Development

```bash
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Quality Check

```bash
npx tsc --noEmit
```

## Project Content

- Blog markdown files are in: `content/blog/`
- Project showcase data is in: `data/projects.ts`

## License

MIT - see [LICENSE](./LICENSE).

