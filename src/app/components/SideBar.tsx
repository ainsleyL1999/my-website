import type { Section } from "@/types/section";

type SideBarProps = {
  sections: Section[];
  onSelect: (section: Section) => void;
};

/**
 * Sidebar navigation for switching between sections.
 *
 * @param sections - List of sections with content to display.
 * @param onSelect - Callback when a section is selected so that the content for that section can be displayed.
 */
export function SideBar({ sections, onSelect }: SideBarProps) {
  return (
    <div className="w-1/3 bg-[var(--colour-section)] text-[var(--colour-text)] flex flex-col p-6 gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSelect(section)}
          className="
            btn bg-[var(--colour-button)]
            hover:bg-[var(--colour-button-hover)]
            text-[var(--colour-text)] 
            transition-all duration-150 ease-out 
            hover:shadow-lg 
            hover:scale-[1.02] active:scale-98
          "
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}
