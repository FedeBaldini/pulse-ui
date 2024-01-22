/**
 * This interface defines a theme for styling purposes, allowing users to customize various elements such as borders and colors.
 *
 * @property {Object} borderRadius - Defines properties for overriding border radius for specific elements.
 * @property {string} borderRadius.generic - Border radius for generic elements.
 * @property {string} borderRadius.alert - Border radius for alert elements.
 * @property {string} borderRadius.button - Border radius for buttons.
 * @property {string} borderRadius.input - Border radius for input elements.
 * @property {string} borderRadius.segment - Border radius for segments.
 *
 * @property {Object} colors - Defines properties for overriding colors for specific elements.
 * @property {string} colors.primary - Primary color.
 * @property {string} colors.primaryDark - Dark shade of the primary color.
 * @property {string} colors.primaryLight - Light shade of the primary color.
 * @property {string} colors.primaryExtraLight - Extra light shade of the primary color.
 * @property {string} colors.secondary - Secondary color.
 * @property {string} colors.secondaryDark - Dark shade of the secondary color.
 * @property {string} colors.secondaryLight - Light shade of the secondary color.
 * @property {string} colors.secondaryExtraLight - Extra light shade of the secondary color.
 * @property {string} colors.tertiary - Tertiary color.
 * @property {string} colors.tertiaryDark - Dark shade of the tertiary color.
 * @property {string} colors.tertiaryLight - Light shade of the tertiary color.
 * @property {string} colors.tertiaryExtraLight - Extra light shade of the tertiary color.
 * @property {string} colors.error - Color for error elements.
 * @property {string} colors.errorDark - Dark shade of the color for error elements.
 * @property {string} colors.errorLight - Light shade of the color for error elements.
 * @property {string} colors.errorExtraLight - Extra light shade of the color for error elements.
 * @property {string} colors.warning - Color for warning elements.
 * @property {string} colors.warningDark - Dark shade of the color for warning elements.
 * @property {string} colors.warningLight - Light shade of the color for warning elements.
 * @property {string} colors.warningExtraLight - Extra light shade of the color for warning elements.
 * @property {string} colors.success - Color for success elements.
 * @property {string} colors.successDark - Dark shade of the color for success elements.
 * @property {string} colors.successLight - Light shade of the color for success elements.
 * @property {string} colors.successExtraLight - Extra light shade of the color for success elements.
 * @property {string} colors.neutral - Neutral color.
 * @property {string} colors.neutralDark - Dark shade of the neutral color.
 * @property {string} colors.neutralLight - Light shade of the neutral color.
 * @property {string} colors.neutralExtraLight - Extra light shade of the neutral color.
 * @property {string} colors.darkPrimary - Primary color for dark mode.
 */
export interface Theme {
  borderRadius: {
    generic: string;
    alert: string;
    button: string;
    input: string;
    segment: string;
  };
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
    darkPrimary: string;
  };
}
