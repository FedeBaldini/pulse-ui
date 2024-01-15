import { createContext, CSSProperties, useMemo } from "react";

import { Config } from "tailwindcss";

import { WithChildren } from "../types";

interface Theme {
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    primaryExtraLight: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
    secondaryExtraLight: string;
    tertiary: string;
    tertiaryDark: string;
    tertiaryLight: string;
    tertiaryExtraLight: string;
    error: string;
    errorDark: string;
    errorLight: string;
    errorExtraLight: string;
    warning: string;
    warningDark: string;
    warningLight: string;
    warningExtraLight: string;
    success: string;
    successDark: string;
    successLight: string;
    successExtraLight: string;
    neutral: string;
    neutralDark: string;
    neutralLight: string;
    neutralExtraLight: string;
  };
}

type IStyleContext = Config["theme"];

const DEFAULT_CONTEXT_VALUE: Theme = {
  colors: {
    primary: "#3498db",
    primaryDark: "#2980b9",
    primaryLight: "#5da5e8",
    primaryExtraLight: "#a9cce3",
    secondary: "#8e44ad",
    secondaryDark: "#6c3483",
    secondaryLight: "#af7ac5",
    secondaryExtraLight: "#d2b4de",
    tertiary: "#e6477f",
    tertiaryDark: "#d83670",
    tertiaryLight: "#ee5893",
    tertiaryExtraLight: "#f481a9",
    error: "#e74c3c",
    errorDark: "#c0392b",
    errorLight: "#ec7063",
    errorExtraLight: "#f1948a",
    warning: "#f39c12",
    warningDark: "#d35400",
    warningLight: "#f7b731",
    warningExtraLight: "#f9e79f",
    success: "#2ecc71",
    successDark: "#27ae60",
    successLight: "#51e898",
    successExtraLight: "#a2e8c5",
    neutral: "#95a5a6",
    neutralDark: "#7f8c8d",
    neutralLight: "#bdc3c7",
    neutralExtraLight: "#ecf0f1"
  }
};

export const StyleContext = createContext<IStyleContext>(DEFAULT_CONTEXT_VALUE);
export const StyleContextProvider = StyleContext.Provider;

interface StyleProviderProps extends WithChildren {
  theme?: Partial<Theme>;
}

export function StyleProvider({ children, theme }: StyleProviderProps) {
  const value = useMemo(
    () => ({
      ...DEFAULT_CONTEXT_VALUE,
      ...theme
    }),
    [theme]
  );

  return (
    <StyleContextProvider value={value}>
      <div
        style={
          {
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
