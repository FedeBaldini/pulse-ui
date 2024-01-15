import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "../Container";

const meta = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus velit a tellus. Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id mollis imperdiet, metus velit finibus enim, eget suscipit lectus nisi vel nunc. Vivamus facilisis diam id finibus hendrerit. Sed quis lorem vitae odio commodo fermentum. Nullam eu condimentum tellus. Sed non efficitur lectus, eget scelerisque nunc. Donec id ullamcorper risus. Etiam sed mattis orci, ac rhoncus eros. In lobortis dolor dolor, consequat lobortis nunc ullamcorper non. Proin et gravida dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce in dignissim sem, a sagittis sem. Proin eget auctor mi. Proin scelerisque, tortor et tristique dapibus, lacus orci ultricies lacus, quis imperdiet augue ligula vel mauris. Vivamus vel porta massa. In euismod semper nulla, at aliquam lectus suscipit vel. Curabitur et condimentum enim. Proin eu ipsum et libero tempor vehicula sit amet quis elit. Integer et nulla nunc. Proin sit amet nulla est. Quisque ultricies sed nunc in iaculis. Donec eros nisi, facilisis vel sollicitudin et, imperdiet in lectus. Nunc fringilla urna ac leo bibendum blandit. Ut ullamcorper accumsan nibh, at vulputate nulla sagittis non. Fusce arcu ipsum, faucibus quis varius a, efficitur at lectus. Maecenas nibh tortor, pharetra suscipit vestibulum eu, commodo id est. Vestibulum aliquam iaculis nisi, ac blandit nunc porta at. Morbi ut tellus rhoncus, dignissim nunc ac, euismod nibh. Etiam in tempus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet euismod arcu. Curabitur consequat libero eget dolor viverra rutrum. Fusce at ultricies massa, eget iaculis quam. Quisque turpis est, sollicitudin vel congue eget, dignissim interdum elit. Nullam feugiat augue sit amet neque euismod maximus. Nulla eu nunc nec metus ornare pharetra. In iaculis pretium neque. Aenean at leo vel arcu faucibus ullamcorper in nec enim. Duis vel mi at turpis porttitor tincidunt et et mi. Aenean lobortis massa mi, ac aliquam risus pellentesque quis. Proin a velit vitae mi aliquam suscipit quis at purus. Duis eget purus vitae lorem consectetur dictum eget et felis. Aenean rutrum ac lectus sed interdum. Ut tincidunt gravida velit, et ornare lorem convallis porta. Etiam vel pulvinar magna, in convallis lacus. Cras accumsan elementum varius. Aliquam ornare sed ante ac vehicula. Mauris turpis nisl, pretium sed pretium vel, rhoncus et eros. Aliquam sit amet tortor finibus, efficitur enim eget, vestibulum eros."
  }
};
