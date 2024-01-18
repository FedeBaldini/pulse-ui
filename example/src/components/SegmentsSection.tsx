import { Section, Segment, Title } from "@fbaldini/pulse-ui";

export function SegmentsSection() {
  return (
    <Section>
      <Title as="h3">Segments</Title>
      <Title as="h5">Default</Title>
      <div className="flex items-center gap-4">
        <Segment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam
          posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac
          mattis lacus velit a tellus. Donec viverra, odio a bibendum imperdiet,
          turpis ipsum vestibulum ligula, at suscipit diam ipsum id nunc.
          Integer accumsan, libero id mollis imperdiet, metus velit finibus
          enim, eget suscipit lectus nisi vel nunc. Vivamus facilisis diam id
          finibus hendrerit. Sed quis lorem vitae odio commodo fermentum. Nullam
          eu condimentum tellus. Sed non efficitur lectus, eget scelerisque
          nunc. Donec id ullamcorper risus. Etiam sed mattis orci, ac rhoncus
          eros. In lobortis dolor dolor, consequat lobortis nunc ullamcorper
          non.
        </Segment>
      </div>
      <Title as="h5">Grid</Title>
      <div className="grid md:grid-cols-2 items-center gap-4">
        <Segment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam
          posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac
          mattis lacus velit a tellus.
        </Segment>
        <Segment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam
          posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac
          mattis lacus velit a tellus.
        </Segment>
        <Segment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam
          posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac
          mattis lacus velit a tellus.
        </Segment>
        <Segment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
          euismod nulla. Nullam sagittis lectus ut velit blandit iaculis. Etiam
          posuere, nunc ac iaculis fringilla, tellus sem tincidunt ipsum, ac
          mattis lacus velit a tellus.
        </Segment>
      </div>
    </Section>
  );
}
