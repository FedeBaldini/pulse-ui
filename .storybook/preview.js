import { Container, StyleProvider, ToastProvider } from "../src";
import "../src/styles/global.css";

const preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false
    }
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: {
        xs: {
          name: "xs",
          styles: { width: "420px", height: "747px" }
        },
        sm: {
          name: "sm",
          styles: { width: "640px", height: "1137px" }
        },
        md: {
          name: "md",
          styles: { width: "768px", height: "1024px" }
        },
        lg: {
          name: "lg",
          styles: { width: "1024px", height: "768px" }
        },
        xl: {
          name: "xl",
          styles: { width: "1280px", height: "800px" }
        },
        "2xl": {
          name: "2xl",
          styles: { width: "1536px", height: "864px" }
        }
      },
      defaultViewport: "xs",
      disabled: false
    }
  }
};

export default preview;

export const decorators = [
  (Story) => (
    <StyleProvider>
      <ToastProvider>
        <Container>
          <Story />
        </Container>
      </ToastProvider>
    </StyleProvider>
  )
];
