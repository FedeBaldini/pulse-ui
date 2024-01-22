import { Theme } from "./Theme.interface";

/**
 * Predefined theme values for default styling.
 *
 * @constant {Theme} DEFAULT_THEME
 */
export const DEFAULT_THEME: Theme = {
  borderRadius: {
    generic: "10px",
    alert: "10px",
    button: "10px",
    input: "10px",
    segment: "10px"
  },
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
    neutralExtraLight: "#ecf0f1",
    darkPrimary: "#1E293B"
  }
};
