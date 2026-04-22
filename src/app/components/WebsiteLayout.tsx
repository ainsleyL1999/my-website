"use client";

import { useState } from "react";
import type { Section } from "@/types/section";
import { SideBar } from "@/app/components/SideBar";
import { AboutMe } from "@/app/components/content/AboutMe";

// Store the component (content) so we can render it dynamically based on the active section.
const sections: Section[] = [
  { id: "about-me", title: "About Me", content: AboutMe },
];

/**
 * Main layout that renders a sidebar and dynamically switches
 * between section content based on user selection of the sections in the sidebar.
 */
export function WebsiteLayout() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const ActiveSectionContent = activeSection.content;

  return (
    <div className="flex h-screen">
      <SideBar sections={sections} onSelect={setActiveSection} />

      <div className="w-2/3 bg-[var(--colour-content)] p-10 overflow-y-auto">
        <ActiveSectionContent />
      </div>
    </div>
  );
}
