import {
  Avatar,
  Button,
  Input,
  Section,
  Title,
  Tooltip
} from "@fbaldini/pulse-ui";

export function TooltipsSection() {
  return (
    <Section>
      <Title as="h3">Tooltips</Title>
      <div className="flex flex-col w-1/2 gap-2">
        <Tooltip message="A very nice tooltip to see here when hovering!">
          <Button onClick={console.log}>Hover me</Button>
        </Tooltip>
        <Tooltip message="A very nice tooltip to see here when hovering!">
          <Input
            type="text"
            placeholder="Insert text here but also hover me..."
          />
        </Tooltip>
        <Tooltip message="A very nice tooltip to see here when hovering!">
          <Avatar src="./avatar.jpg" size="medium" />
        </Tooltip>
      </div>
    </Section>
  );
}
