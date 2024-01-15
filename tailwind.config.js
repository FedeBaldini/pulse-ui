/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-dark": "var(--primary-dark-color)",
        "primary-light": "var(--primary-light-color)",
        "primary-extra-light": "var(--primary-extra-light-color)",
        secondary: "var(--secondary-color)",
        "secondary-dark": "var(--secondary-dark-color)",
        "secondary-light": "var(--secondary-light-color)",
        "secondary-extra-light": "var(--secondary-extra-light-color)",
        tertiary: "var(--tertiary-color)",
        "tertiary-dark": "var(--tertiary-dark-color)",
        "tertiary-light": "var(--tertiary-light-color)",
        "tertiary-extra-light": "var(--tertiary-extra-light-color)",
        error: "var(--error-color)",
        "error-dark": "var(--error-dark-color)",
        "error-light": "var(--error-light-color)",
        "error-extra-light": "var(--error-extra-light-color)",
        warning: "var(--warning-color)",
        "warning-dark": "var(--warning-dark-color)",
        "warning-light": "var(--warning-light-color)",
        "warning-extra-light": "var(--warning-extra-light-color)",
        success: "var(--success-color)",
        "success-dark": "var(--success-dark-color)",
        "success-light": "var(--success-light-color)",
        "success-extra-light": "var(--success-extra-light-color)",
        neutral: "var(--neutral-color)",
        "neutral-dark": "var(--neutral-dark-color)",
        "neutral-light": "var(--neutral-light-color)",
        "neutral-extra-light": "var(--neutral-extra-light-color)"
      }
    }
  },
  plugins: []
};
