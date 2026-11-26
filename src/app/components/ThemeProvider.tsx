"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/app/components/ThemeToggle";

type Theme = "light" | "dark";

/**
 * To manage the theme (light or dark) of the application.
 *
 * @param children - The child nodes to render within the theme provider.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);

  // Load saved theme OR fallback to OS preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    setIsThemeInitialized(true);
  }, []);

  //Apply theme and store it in local storage
  useEffect(() => {
    if (!isThemeInitialized) return;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, isThemeInitialized]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((selectedTheme) => (selectedTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {children}

      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </>
  );
}
