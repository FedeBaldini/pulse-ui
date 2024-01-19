import {
  Button,
  Form,
  Input,
  Section,
  Title,
  useStyle
} from "@fbaldini/pulse-ui";
import { useRouter } from "next/navigation";

import { useStyleController } from "../contexts";

export function ThemeController() {
  const { setTheme } = useStyleController();
  const theme = useStyle();
  const router = useRouter();

  const borderRadius = theme.borderRadius.default.replace("px", "").trim();

  return (
    <Section.Group>
      <Section>
        <div className="mb-2 flex items-center justify-between">
          <Title as="h3">Colors controller</Title>
          <Button style="error" outlined onClick={() => router.refresh()}>
            Reset
          </Button>
        </div>
        <Form className="grid md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(theme.colors).map(([name, value]) => (
            <Form.Field label={name} id={name} key={name}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-2">
                <div
                  className="w-full h-10 rounded-default"
                  style={{ backgroundColor: value }}
                />
                <Input
                  value={value}
                  onChange={(event) => {
                    setTheme({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        [name]: event.currentTarget.value
                      }
                    });
                  }}
                />
              </div>
            </Form.Field>
          ))}
        </Form>
      </Section>
      <Section>
        <div className="mb-2 flex items-center justify-between">
          <Title as="h3">Border controller</Title>
          <Button style="error" outlined onClick={() => router.refresh()}>
            Reset
          </Button>
        </div>
        <Form className="grid md:grid-cols-2 lg:grid-cols-4">
          <Form.Field label="borderRadius" id="borderRadius">
            <div className="grid grid-cols-[2.5rem_1fr] gap-2">
              <div
                className="w-full h-10 border-2 border-neutral"
                style={{ borderRadius: theme.borderRadius.default }}
              />
              <Input
                type="number"
                value={Number(borderRadius)}
                onChange={(event) => {
                  setTheme({
                    ...theme,
                    borderRadius: {
                      ...theme.borderRadius,
                      default: `${event.currentTarget.value}px`
                    }
                  });
                }}
              />
            </div>
          </Form.Field>
        </Form>
      </Section>
    </Section.Group>
  );
}
