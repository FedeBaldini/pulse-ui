import { createContext, CSSProperties, useContext, useMemo } from "react";

import { WithChildren } from "../types";
import { DEFAULT_THEME } from "./defaultTheme";
import { Theme } from "./Theme.interface";

export const StyleContext = createContext<Theme>(DEFAULT_THEME);
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
        className="relative"
        style={
          {
            "--border-radius-generic": value.borderRadius.generic,
            "--border-radius-alert": value.borderRadius.alert,
            "--border-radius-button": value.borderRadius.button,
            "--border-radius-input": value.borderRadius.input,
            "--border-radius-segment": value.borderRadius.segment,
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
            "--neutral-extra-light-color": value.colors.neutralExtraLight,
            "--dark-primary-color": value.colors.darkPrimary
          } as CSSProperties
        }
      >
        {children}
      </div>
    </StyleContextProvider>
  );
}

export function useStyle() {
  return useContext(StyleContext);
}
