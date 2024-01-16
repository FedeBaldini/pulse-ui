import { createContext, CSSProperties, useMemo } from "react";

import { Config } from "tailwindcss";

import { WithChildren } from "../types";
import { DEFAULT_THEME } from "./defaultTheme";
import { Theme } from "./Theme.interface";

type IStyleContext = Config["theme"];

export const StyleContext = createContext<IStyleContext>(DEFAULT_THEME);
export const StyleContextProvider = StyleContext.Provider;

interface StyleProviderProps extends WithChildren {
  theme?: Partial<Theme>;
}

export function StyleProvider({ children, theme }: StyleProviderProps) {
  const value = useMemo(
    () => ({
      ...DEFAULT_THEME,
      ...theme
    }),
    [theme]
  );

  return (
    <StyleContextProvider value={value}>
      <div
        style={
          {
            "--border-radius": value.borderRadius.default,
            "--primary-color": value.colors.primary,
            "--primary-dark-color": value.colors.primaryDark,
            "--primary-light-color": value.colors.primaryLight,
            "--primary-extra-light-color": value.colors.primaryExtraLight,
            "--secondary-color": value.colors.secondary,
            "--secondary-dark-color": value.colors.secondaryDark,
            "--secondary-light-color": value.colors.secondaryLight,
            "--secondary-extra-light-color": value.colors.secondaryExtraLight,
            "--tertiary-color": value.colors.tertiary,
            "--tertiary-dark-color": value.colors.tertiaryDark,
            "--tertiary-light-color": value.colors.tertiaryLight,
            "--tertiary-extra-light-color": value.colors.tertiaryExtraLight,
            "--error-color": value.colors.error,
            "--error-dark-color": value.colors.errorDark,
            "--error-light-color": value.colors.errorLight,
            "--error-extra-light-color": value.colors.errorExtraLight,
            "--warning-color": value.colors.warning,
            "--warning-dark-color": value.colors.warningDark,
            "--warning-light-color": value.colors.warningLight,
            "--warning-extra-light-color": value.colors.warningExtraLight,
            "--success-color": value.colors.success,
            "--success-dark-color": value.colors.successDark,
            "--success-light-color": value.colors.successLight,
            "--success-extra-light-color": value.colors.successExtraLight,
            "--neutral-color": value.colors.neutral,
            "--neutral-dark-color": value.colors.neutralDark,
            "--neutral-light-color": value.colors.neutralLight,
            "--neutral-extra-light-color": value.colors.neutralExtraLight
          } as CSSProperties
        }
        className="flex-item"
      >
        {children}
      </div>
    </StyleContextProvider>
  );
}