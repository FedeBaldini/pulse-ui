import { Avatar, Title } from "@fbaldini/pulse-ui";

export function AvatarsSection() {
  return (
    <div className="my-8">
      <Title as="h3">Avatars</Title>
      <Title as="h5" className="my-2">
        Default
      </Title>
      <div className="flex items-center gap-4">
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <Title as="h5" className="my-2">
        With image
      </Title>
      <div className="flex items-center gap-4">
        <Avatar src="./avatar.jpg" size="small" />
        <Avatar src="./avatar.jpg" size="medium" />
        <Avatar src="./avatar.jpg" size="large" />
      </div>
      <Title as="h5" className="my-2">
        With initials
      </Title>
      <div className="flex items-center gap-4">
        <Avatar firstName="Federico" lastName="Baldini" size="small" />
        <Avatar firstName="Federico" lastName="Baldini" size="medium" />
        <Avatar firstName="Federico" lastName="Baldini" size="large" />
      </div>
    </div>
  );
}
