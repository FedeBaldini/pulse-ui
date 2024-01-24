import { render, screen } from "@testing-library/react";

import { StyleProvider, useStyle } from "../StyleContext";
import { Theme } from "../Theme.interface";

function convertThemeToStyle(theme: Theme) {
  return {
    borderRadius: theme.borderRadius.generic,
    borderRadiusAlert: theme.borderRadius.alert,
    borderRadiusButton: theme.borderRadius.button,
    borderRadiusInput: theme.borderRadius.input,
    borderRadiusSegment: theme.borderRadius.segment,
    primaryColor: theme.colors.primary,
    primaryDarkColor: theme.colors.primaryDark,
    primaryLightColor: theme.colors.primaryLight,
    primaryExtraLightColor: theme.colors.primaryExtraLight,
    secondaryColor: theme.colors.secondary,
    secondaryDarkColor: theme.colors.secondaryDark,
    secondaryLightColor: theme.colors.secondaryLight,
    secondaryExtraLightColor: theme.colors.secondaryExtraLight,
    tertiaryColor: theme.colors.tertiary,
    tertiaryDarkColor: theme.colors.tertiaryDark,
    tertiaryLightColor: theme.colors.tertiaryLight,
    tertiaryExtraLightColor: theme.colors.tertiaryExtraLight,
    errorColor: theme.colors.error,
    errorDarkColor: theme.colors.errorDark,
    errorLightColor: theme.colors.errorLight,
    errorExtraLightColor: theme.colors.errorExtraLight,
    warningColor: theme.colors.warning,
    warningDarkColor: theme.colors.warningDark,
    warningLightColor: theme.colors.warningLight,
    warningExtraLightColor: theme.colors.warningExtraLight,
    successColor: theme.colors.success,
    successDarkColor: theme.colors.successDark,
    successLightColor: theme.colors.successLight,
    successExtraLightColor: theme.colors.successExtraLight,
    neutralColor: theme.colors.neutral,
    neutralDarkColor: theme.colors.neutralDark,
    neutralLightColor: theme.colors.neutralLight,
    neutralExtraLightColor: theme.colors.neutralExtraLight,
    darkPrimaryColor: theme.colors.darkPrimary
  };
}

const TestComponent = () => {
  const style = useStyle();
  const styleObject = convertThemeToStyle(style);
  return <div style={styleObject}>Test</div>;
};

describe("styles/StyleContext", () => {
  it("renders the children", () => {
    render(<StyleProvider>Children</StyleProvider>);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });

  it("applies default theme values", () => {
    render(
      <StyleProvider>
        <TestComponent />
      </StyleProvider>
    );

    const testElement = screen.getByText("Test");
    expect(testElement.style).toMatchObject({
      borderRadiusAlert: "10px",
      borderRadiusButton: "10px",
      borderRadiusInput: "10px",
      borderRadiusSegment: "10px",
      primaryColor: "#3498db",
      primaryDarkColor: "#2980b9",
      primaryLightColor: "#5da5e8",
      primaryExtraLightColor: "#a9cce3",
      secondaryColor: "#8e44ad",
      secondaryDarkColor: "#6c3483",
      secondaryLightColor: "#af7ac5",
      secondaryExtraLightColor: "#d2b4de",
      tertiaryColor: "#e6477f",
      tertiaryDarkColor: "#d83670",
      tertiaryLightColor: "#ee5893",
      tertiaryExtraLightColor: "#f481a9",
      errorColor: "#e74c3c",
      errorDarkColor: "#c0392b",
      errorLightColor: "#ec7063",
      errorExtraLightColor: "#f1948a",
      warningColor: "#f39c12",
      warningDarkColor: "#d35400",
      warningLightColor: "#f7b731",
      warningExtraLightColor: "#f9e79f",
      successColor: "#2ecc71",
      successDarkColor: "#27ae60",
      successLightColor: "#51e898",
      successExtraLightColor: "#a2e8c5",
      neutralColor: "#95a5a6",
      neutralDarkColor: "#7f8c8d",
      neutralLightColor: "#bdc3c7",
      neutralExtraLightColor: "#ecf0f1",
      darkPrimaryColor: "#1E293B"
    });
  });

  it("overrides default theme values with provided theme", () => {
    const customTheme = {
      borderRadius: {
        generic: "8px",
        alert: "10px",
        button: "6px",
        input: "5px",
        segment: "3px"
      },
      colors: {
        primary: "#ff0000",
        primaryDark: "#cc0000",
        primaryLight: "#ff3333",
        primaryExtraLight: "#ff6666",
        secondary: "#00ff00",
        secondaryDark: "#00cc00",
        secondaryLight: "#33ff33",
        secondaryExtraLight: "#66ff66",
        tertiary: "#0000ff",
        tertiaryDark: "#0000cc",
        tertiaryLight: "#3333ff",
        tertiaryExtraLight: "#6666ff",
        error: "#ff0000",
        errorDark: "#cc0000",
        errorLight: "#ff3333",
        errorExtraLight: "#ff6666",
        warning: "#ffcc00",
        warningDark: "#cc9900",
        warningLight: "#ffcc33",
        warningExtraLight: "#ffcc66",
        success: "#00ff00",
        successDark: "#00cc00",
        successLight: "#33ff33",
        successExtraLight: "#66ff66",
        neutral: "#999999",
        neutralDark: "#666666",
        neutralLight: "#cccccc",
        neutralExtraLight: "#dddddd",
        darkPrimary: "#000000"
      }
    };

    render(
      <StyleProvider theme={customTheme}>
        <TestComponent />
      </StyleProvider>
    );

    const testElement = screen.getByText("Test");
    expect(testElement.style).toMatchObject({
      borderRadius: "8px",
      borderRadiusAlert: "10px",
      borderRadiusButton: "6px",
      borderRadiusInput: "5px",
      borderRadiusSegment: "3px",
      primaryColor: "#ff0000",
      primaryDarkColor: "#cc0000",
      primaryLightColor: "#ff3333",
      primaryExtraLightColor: "#ff6666",
      secondaryColor: "#00ff00",
      secondaryDarkColor: "#00cc00",
      secondaryLightColor: "#33ff33",
      secondaryExtraLightColor: "#66ff66",
      tertiaryColor: "#0000ff",
      tertiaryDarkColor: "#0000cc",
      tertiaryLightColor: "#3333ff",
      tertiaryExtraLightColor: "#6666ff",
      errorColor: "#ff0000",
      errorDarkColor: "#cc0000",
      errorLightColor: "#ff3333",
      errorExtraLightColor: "#ff6666",
      warningColor: "#ffcc00",
      warningDarkColor: "#cc9900",
      warningLightColor: "#ffcc33",
      warningExtraLightColor: "#ffcc66",
      successColor: "#00ff00",
      successDarkColor: "#00cc00",
      successLightColor: "#33ff33",
      successExtraLightColor: "#66ff66",
      neutralColor: "#999999",
      neutralDarkColor: "#666666",
      neutralLightColor: "#cccccc",
      neutralExtraLightColor: "#dddddd",
      darkPrimaryColor: "#000000"
    });
  });
});
