import { IconName } from "./IconName.type";
import { Icons, SvgIconProps } from "./Icons";

export interface Props extends SvgIconProps {
  name: IconName;
}

export function Icon({ name, ...props }: Props) {
  const Component = Icons[name];
  return <Component {...props} />;
}
