import type { ComponentType } from "react";

/**
 * Represents a section in the sidebar.
 * Each section includes a component that will be rendered dynamically.
 */
export type Section = {
  id: string;
  title: string;
  content: ComponentType; // React component to render when this section is active
};
