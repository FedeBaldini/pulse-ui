import { Section, Title, Typography } from "@fbaldini/pulse-ui";

export function TypographiesSection() {
  return (
    <Section>
      <Title as="h3">Typograhpies</Title>
      <Typography type="small" className="my-2">
        Typography as small
      </Typography>
      <Typography type="medium" className="my-2">
        Typography as medium
      </Typography>
      <Typography type="large" className="my-2">
        Typography as large
      </Typography>
      <Typography type="extraLarge" className="my-2">
        Typography as extraLarge
      </Typography>
      <Typography type="boldSmall" className="my-2">
        Typography as boldSmall
      </Typography>
      <Typography type="boldMedium" className="my-2">
        Typography as boldMedium
      </Typography>
      <Typography type="boldLarge" className="my-2">
        Typography as boldLarge
      </Typography>
      <Typography type="boldExtraLarge" className="my-2">
        Typography as boldExtraLarge
      </Typography>
      <Typography type="leadSmall" className="my-2">
        Typography as leadSmall
      </Typography>
      <Typography type="leadMedium" className="my-2">
        Typography as leadMedium
      </Typography>
      <Typography type="leadLarge" className="my-2">
        Typography as leadLarge
      </Typography>
      <Typography type="leadExtraLarge" className="my-2">
        Typography as leadExtraLarge
      </Typography>
    </Section>
  );
}
