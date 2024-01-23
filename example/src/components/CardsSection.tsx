import { Button, Card, Section, Title } from "@fbaldini/pulse-ui";

export function CardsSection() {
  return (
    <Section>
      <Title as="h3">Cards</Title>
      <Title as="h5">Default</Title>
      <div className="flex items-center gap-4">
        <Card>
          <Card.Header>
            <div className="flex items-center justify-between">
              <span>Header</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Header>
          <Card.Image src="/avatar_square.png" />
          <Card.Content>Content</Card.Content>
          <Card.Title>Title</Card.Title>
          <Card.SubTitle>Subtitle</Card.SubTitle>
          <Card.Footer>
            <div className="flex items-center justify-between">
              <span>Footer</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Footer>
        </Card>
      </div>
      <Title as="h5">Grid</Title>
      <div className="grid md:grid-cols-2 items-center gap-4">
        <Card>
          <Card.Header>
            <div className="flex items-center justify-between">
              <span>Header</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Header>
          <Card.Image src="/avatar_square.png" />
          <Card.Content>Content</Card.Content>
          <Card.Title>Title</Card.Title>
          <Card.SubTitle>Subtitle</Card.SubTitle>
          <Card.Footer>
            <div className="flex items-center justify-between">
              <span>Footer</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <div className="flex items-center justify-between">
              <span>Header</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Header>
          <Card.Image src="/avatar_square.png" />
          <Card.Content>Content</Card.Content>
          <Card.Title>Title</Card.Title>
          <Card.SubTitle>Subtitle</Card.SubTitle>
          <Card.Footer>
            <div className="flex items-center justify-between">
              <span>Footer</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <div className="flex items-center justify-between">
              <span>Header</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Header>
          <Card.Image src="/avatar_square.png" />
          <Card.Content>Content</Card.Content>
          <Card.Title>Title</Card.Title>
          <Card.SubTitle>Subtitle</Card.SubTitle>
          <Card.Footer>
            <div className="flex items-center justify-between">
              <span>Footer</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <div className="flex items-center justify-between">
              <span>Header</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Header>
          <Card.Image src="/avatar_square.png" />
          <Card.Content>Content</Card.Content>
          <Card.Title>Title</Card.Title>
          <Card.SubTitle>Subtitle</Card.SubTitle>
          <Card.Footer>
            <div className="flex items-center justify-between">
              <span>Footer</span>
              <Button small outlined children="Action" />
            </div>
          </Card.Footer>
        </Card>
      </div>
    </Section>
  );
}
