import {
  createContext,
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import merge from "deepmerge";

import { DeepPartial, WithChildren } from "../types";
import { DEFAULT_THEME } from "./defaultTheme";
import { Theme } from "./Theme.interface";

interface IStyleContext {
  value: Theme;
  mergeTheme: (overrides?: Partial<Theme>) => void;
}

export const StyleContext = createContext<IStyleContext>({
  value: DEFAULT_THEME,
  mergeTheme: () => {}
});
export const StyleContextProvider = StyleContext.Provider;

interface StyleProviderProps extends WithChildren {
  theme?: Partial<Theme>;
}

export function StyleProvider({
  children,
  theme: customTheme
}: StyleProviderProps) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setTheme({
      ...DEFAULT_THEME,
      ...customTheme
    });
  }, []);

  const mergeTheme = useCallback(
    (overrides: DeepPartial<Theme> = {}) => {
      const updatedTheme = merge(theme, overrides) as Theme;
      setTheme(updatedTheme);
    },
    [theme]
  );

  const contextValue = useMemo(
    () => ({
      value: theme,
      mergeTheme
    }),
    [theme]
  );

  return (
    <StyleContextProvider value={contextValue}>
      <div
        style={
          {
            "--border-radius": contextValue.value.borderRadius.default,
            "--primary-color": contextValue.value.colors.primary,
            "--primary-dark-color": contextValue.value.colors.primaryDark,
            "--primary-light-color": contextValue.value.colors.primaryLight,
            "--primary-extra-light-color":
              contextValue.value.colors.primaryExtraLight,
            "--secondary-color": contextValue.value.colors.secondary,
            "--secondary-dark-color": contextValue.value.colors.secondaryDark,
            "--secondary-light-color": contextValue.value.colors.secondaryLight,
            "--secondary-extra-light-color":
              contextValue.value.colors.secondaryExtraLight,
            "--tertiary-color": contextValue.value.colors.tertiary,
            "--tertiary-dark-color": contextValue.value.colors.tertiaryDark,
            "--tertiary-light-color": contextValue.value.colors.tertiaryLight,
            "--tertiary-extra-light-color":
              contextValue.value.colors.tertiaryExtraLight,
            "--error-color": contextValue.value.colors.error,
            "--error-dark-color": contextValue.value.colors.errorDark,
            "--error-light-color": contextValue.value.colors.errorLight,
            "--error-extra-light-color":
              contextValue.value.colors.errorExtraLight,
            "--warning-color": contextValue.value.colors.warning,
            "--warning-dark-color": contextValue.value.colors.warningDark,
            "--warning-light-color": contextValue.value.colors.warningLight,
            "--warning-extra-light-color":
              contextValue.value.colors.warningExtraLight,
            "--success-color": contextValue.value.colors.success,
            "--success-dark-color": contextValue.value.colors.successDark,
            "--success-light-color": contextValue.value.colors.successLight,
            "--success-extra-light-color":
              contextValue.value.colors.successExtraLight,
            "--neutral-color": contextValue.value.colors.neutral,
            "--neutral-dark-color": contextValue.value.colors.neutralDark,
            "--neutral-light-color": contextValue.value.colors.neutralLight,
            "--neutral-extra-light-color":
              contextValue.value.colors.neutralExtraLight,
            "--dark-primary-color": contextValue.value.colors.darkPrimary
          } as CSSProperties
        }
        className="flex-item"
      >
        {children}
      </div>
    </StyleContextProvider>
  );
}

export function useStyle() {
  return useContext(StyleContext);
}
