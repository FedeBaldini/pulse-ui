import { Avatar, Section, Title } from "@fbaldini/pulse-ui";

export function AvatarsSection() {
  return (
    <Section>
      <Title as="h3">Avatars</Title>
      <Title as="h5">Default</Title>
      <div className="flex items-center gap-4">
        <Avatar size="small" />
        <Avatar size="medium" />
        <Avatar size="large" />
      </div>
      <Title as="h5">With image</Title>
      <div className="flex items-center gap-4">
        <Avatar src="./avatar.jpg" size="small" />
        <Avatar src="./avatar.jpg" size="medium" />
        <Avatar src="./avatar.jpg" size="large" />
      </div>
      <Title as="h5">With initials</Title>
      <div className="flex items-center gap-4">
        <Avatar firstName="Federico" lastName="Baldini" size="small" />
        <Avatar firstName="Federico" lastName="Baldini" size="medium" />
        <Avatar firstName="Federico" lastName="Baldini" size="large" />
      </div>
    </Section>
  );
}
