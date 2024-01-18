import { StoryFn } from "@storybook/react";

import { hideControl } from "../../story-utils/hideControl";
import { Section, SectionProps } from "../Section";

export default {
  title: "components/Section",
  component: Section,
  argTypes: {
    className: hideControl,
    as: hideControl,
    id: hideControl
  }
};

export const Standard: StoryFn<SectionProps> = (args) => <Section {...args} />;
Standard.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus velit a tellus. Donec viverra, odio a bibendum imperdiet, turpis ipsum vestibulum ligula, at suscipit diam ipsum id nunc. Integer accumsan, libero id mollis imperdiet, metus velit finibus enim, eget suscipit lectus nisi vel nunc. Vivamus facilisis diam id finibus hendrerit. Sed quis lorem vitae odio commodo fermentum. Nullam eu condimentum tellus. Sed non efficitur lectus, eget scelerisque nunc. Donec id ullamcorper risus. Etiam sed mattis orci, ac rhoncus eros. In lobortis dolor dolor, consequat lobortis nunc ullamcorper non.",
  padded: true
};

export const WithGroup: StoryFn<SectionProps> = (args) => (
  <Section.Group>
    <Section {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
      nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
      nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
      velit a tellus. Donec viverra, odio a bibendum imperdiet, turpis ipsum
      vestibulum ligula, at suscipit diam ipsum id nunc. Integer accumsan,
      libero id mollis imperdiet, metus velit finibus enim, eget suscipit lectus
      nisi vel nunc. Vivamus facilisis diam id finibus hendrerit. Sed quis lorem
      vitae odio commodo fermentum. Nullam eu condimentum tellus. Sed non
      efficitur lectus, eget scelerisque nunc. Donec id ullamcorper risus. Etiam
      sed mattis orci, ac rhoncus eros. In lobortis dolor dolor, consequat
      lobortis nunc ullamcorper non.
    </Section>
    <Section {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
      nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
      nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
      velit a tellus. Donec viverra, odio a bibendum imperdiet, turpis ipsum
      vestibulum ligula, at suscipit diam ipsum id nunc. Integer accumsan,
      libero id mollis imperdiet, metus velit finibus enim, eget suscipit lectus
      nisi vel nunc. Vivamus facilisis diam id finibus hendrerit. Sed quis lorem
      vitae odio commodo fermentum. Nullam eu condimentum tellus. Sed non
      efficitur lectus, eget scelerisque nunc. Donec id ullamcorper risus. Etiam
      sed mattis orci, ac rhoncus eros. In lobortis dolor dolor, consequat
      lobortis nunc ullamcorper non.
    </Section>
    <Section {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in euismod
      nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam posuere,
      nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac mattis lacus
      velit a tellus. Donec viverra, odio a bibendum imperdiet, turpis ipsum
      vestibulum ligula, at suscipit diam ipsum id nunc. Integer accumsan,
      libero id mollis imperdiet, metus velit finibus enim, eget suscipit lectus
      nisi vel nunc. Vivamus facilisis diam id finibus hendrerit. Sed quis lorem
      vitae odio commodo fermentum. Nullam eu condimentum tellus. Sed non
      efficitur lectus, eget scelerisque nunc. Donec id ullamcorper risus. Etiam
      sed mattis orci, ac rhoncus eros. In lobortis dolor dolor, consequat
      lobortis nunc ullamcorper non.
    </Section>
  </Section.Group>
);
WithGroup.args = {
  padded: true
};
