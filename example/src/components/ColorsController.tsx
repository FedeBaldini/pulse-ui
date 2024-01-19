import { Button, Form, Input, Title, useStyle } from "@fbaldini/pulse-ui";
import { useRouter } from "next/navigation";

interface ColorsControllerProps {
  onThemeChange: (theme: any) => void;
}

export function ColorsController({ onThemeChange }: ColorsControllerProps) {
  const theme = useStyle();
  const router = useRouter();

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <Title as="h3">Colors controller</Title>
        <Button
          className=""
          style="error"
          outlined
          onClick={() => router.refresh()}
        >
          Reset
        </Button>
      </div>
      <Form className="grid md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(theme.colors).map(([name, value]) => (
          <Form.Field label={name} id={name} key={name}>
            <div className="grid grid-cols-[2.5rem_1fr] gap-2">
              <div
                className="w-full h-10 rounded-lg"
                style={{ backgroundColor: value }}
              />
              <Input
                value={value}
                onChange={(event) => {
                  onThemeChange({
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
    </div>
  );
}
