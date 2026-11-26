import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ainsley Liyanagedara",
  description:
    "My personal website built with Next.js, React, Tailwind CSS and DaisyUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
