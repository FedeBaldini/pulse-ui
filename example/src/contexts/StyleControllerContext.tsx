import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { Theme, WithChildren } from "@fbaldini/pulse-ui";

interface IStyleControllerContext {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
  isDarkModeActive: boolean;
  setDarkModeActive: (isDarkModeActive: boolean) => void;
}

export const StyleControllerContext = createContext<IStyleControllerContext>({
  setTheme: () => null,
  isDarkModeActive: false,
  setDarkModeActive: () => null
});
export const StyleControllerContextProvider = StyleControllerContext.Provider;

export function StyleControllerProvider({ children }: WithChildren) {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [isDarkModeActive, setDarkModeActive] = useState(false);

  useEffect(() => {
    if (!theme) return;
    sessionStorage.setItem("PULSE_UI_THEME", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const sessionDarkModeActive = sessionStorage.getItem(
      "PULSE_UI_DARK_MODE_ACTIVE"
    );
    if (!sessionDarkModeActive) return;
    setDarkModeActive(JSON.parse(sessionDarkModeActive));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      isDarkModeActive,
      setDarkModeActive
    }),
    [theme, isDarkModeActive]
  );

  return (
    <StyleControllerContextProvider value={value}>
      {children}
    </StyleControllerContextProvider>
  );
}

export function useStyleController() {
  return useContext(StyleControllerContext);
}
