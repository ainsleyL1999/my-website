import type { Section } from "@/types/section";

type SideBarProps = {
  sections: Section[];
  activeSectionId: string;
  onSelect: (section: Section) => void;
};

/**
 * Sidebar navigation for switching between sections.
 *
 * @param sections - List of sections to display
 * @param activeSectionId - Currently active section ID, used to highlight the active section
 * @param onSelect - Callback when a section is selected, called when a button is clicked
 */
export function SideBar({ sections, activeSectionId, onSelect }: SideBarProps) {
  return (
    <div className="w-1/3 bg-gray-900 text-white flex flex-col p-6 gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSelect(section)}
          className={`text-left p-3 rounded-xl cursor-pointer transition-all duration-500 transform ${
            // Highlight the active section, otherwise apply hover styles
            section.id === activeSectionId
              ? "bg-white text-black font-semibold"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:scale-102"
          }`}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}
