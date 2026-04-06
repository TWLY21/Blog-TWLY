import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Ives Tan Kian Hang | Portfolio + Blog",
  description:
    "Graduate Software Engineer focused on backend development, Node.js, RESTful APIs, PostgreSQL, automation, and system design."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var theme=localStorage.getItem('theme');if(!theme){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(theme==='dark'){document.documentElement.classList.add('dark');}document.documentElement.dataset.theme=theme;}catch(e){}})();`
          }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
