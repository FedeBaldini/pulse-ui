import {
  createContext,
  CSSProperties,
  PropsWithChildren,
  useMemo
} from "react";

import { Config } from "tailwindcss";

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
    tertiaryExtraLight: "#f481a9"
  }
};

export const StyleContext = createContext<IStyleContext>(DEFAULT_CONTEXT_VALUE);
export const StyleContextProvider = StyleContext.Provider;

interface StyleProviderProps extends PropsWithChildren {
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
            "--tertiary-extra-light-color": value.colors.tertiaryExtraLight
          } as CSSProperties
        }
        className="flex-item"
      >
        {children}
      </div>
    </StyleContextProvider>
  );
}
