"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const preferred: Theme =
      saved === "dark" || saved === "light"
        ? (saved as Theme)
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(preferred);
    applyTheme(preferred);
    setReady(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border border-border px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-muted transition hover:border-accent hover:text-accent sm:px-3 sm:text-xs"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {ready ? (theme === "light" ? "Dark" : "Light") : "Theme"}
    </button>
  );
}
