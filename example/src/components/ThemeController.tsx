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
                  className="w-full h-10 rounded-generic"
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
          {Object.entries(theme.borderRadius).map(([name, value]) => (
            <Form.Field label={name} id={name} key={name}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-2">
                <div
                  className="w-full h-10 border-2 border-neutral"
                  style={{ borderRadius: value }}
                />
                <Input
                  type="number"
                  value={Number(
                    (theme.borderRadius as Record<string, string>)[name]
                      .replace("px", "")
                      .trim()
                  )}
                  onChange={(event) => {
                    setTheme({
                      ...theme,
                      borderRadius: {
                        ...theme.borderRadius,
                        [name]: `${event.currentTarget.value}px`
                      }
                    });
                  }}
                />
              </div>
            </Form.Field>
          ))}
        </Form>
      </Section>
    </Section.Group>
  );
}
