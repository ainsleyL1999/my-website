type Theme = "light" | "dark";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

/**
 * A toggle switch for switching between light and dark themes.
 *
 * @param theme - The current theme (light or dark).
 * @param onToggle - Callback function to toggle the theme.
 */
export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-base-200 px-3 py-2 rounded-full shadow">
      <span className="text-sm">Light</span>

      {/* The toggle */}
      <input
        type="checkbox"
        className="toggle toggle-sm"
        checked={theme === "dark"}
        onChange={onToggle}
        aria-label="Toggle dark mode"
      />

      <span className="text-sm">Dark</span>
    </div>
  );
}
