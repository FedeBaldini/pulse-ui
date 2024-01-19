import { Dispatch, SetStateAction, useCallback } from "react";

import { Switch } from "@fbaldini/pulse-ui";

interface ModeSwitcherProps {
  isDarkModeActive: boolean;
  setDarkModeActive: Dispatch<SetStateAction<boolean>>;
}

export function ModeSwitcher({
  isDarkModeActive,
  setDarkModeActive
}: ModeSwitcherProps) {
  const handleChange = useCallback(() => {
    setDarkModeActive(!isDarkModeActive);
  }, [isDarkModeActive]);

  return (
    <div className="mb-4 md:mb-6">
      <Switch
        label={`Dark mode ${isDarkModeActive ? "ON" : "OFF"}`}
        onChange={handleChange}
      />
    </div>
  );
}
