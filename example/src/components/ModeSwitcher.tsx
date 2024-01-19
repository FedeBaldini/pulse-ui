import { useCallback } from "react";

import { Switch } from "@fbaldini/pulse-ui";

import { useStyleController } from "../contexts";

export function ModeSwitcher() {
  const { setDarkModeActive, isDarkModeActive } = useStyleController();

  const handleChange = useCallback(() => {
    setDarkModeActive(!isDarkModeActive);
  }, [isDarkModeActive]);

  return (
    <div className="my-4 md:my-6">
      <Switch
        label={`Dark mode ${isDarkModeActive ? "ON" : "OFF"}`}
        onChange={handleChange}
      />
    </div>
  );
}
