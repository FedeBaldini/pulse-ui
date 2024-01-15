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
        "tertiary-extra-light": "var(--tertiary-extra-light-color)"
      }
    }
  },
  plugins: []
};
