import {
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Switch,
  TextArea,
  Title
} from "@fbaldini/pulse-ui";

export function FormsSection() {
  return (
    <div className="my-8">
      <Title as="h3">Forms</Title>
      <Title as="h4">Inputs</Title>
      <Title as="h5">Default</Title>
      <div className="grid grid-cols-2 items-center gap-2 my-2">
        <Input type="text" placeholder="Insert text here..." />
        <Input type="text" placeholder="Insert text here..." error />
        <Input type="text" placeholder="Insert text here..." warning />
        <Input type="text" placeholder="Insert text here..." success />
      </div>
      <Title as="h5">With Form.Field</Title>
      <div className="grid grid-cols-2 items-center gap-2 my-2">
        <Form.Field label="Label" id="name">
          <Input type="text" placeholder="Insert text here..." />
        </Form.Field>
      </div>
      <Title as="h4">Text areas</Title>
      <Title as="h5">Default</Title>
      <div className="grid grid-cols-2 items-center gap-2 my-2">
        <TextArea placeholder="Insert text here..." />
        <TextArea placeholder="Insert text here..." error />
        <TextArea placeholder="Insert text here..." warning />
        <TextArea placeholder="Insert text here..." success />
      </div>
      <Title as="h5">With Form.Field</Title>
      <div className="grid grid-cols-2 items-center gap-2 my-2">
        <Form.Field label="Label" id="name">
          <TextArea placeholder="Insert text here..." />
        </Form.Field>
      </div>
      <Title as="h4">Selects</Title>
      <Title as="h5">Default</Title>
      <div className="grid grid-cols-2 items-center gap-2 my-2">
        <Select
          placeholder="Choose something..."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" }
          ]}
        />
        <Select
          placeholder="Choose something..."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" }
          ]}
          error
        />
        <Select
          placeholder="Choose something..."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" }
          ]}
          warning
        />
        <Select
          placeholder="Insert text here..."
          options={[
            { label: "First", value: "first" },
            { label: "Second", value: "second" },
            { label: "Third", value: "third" }
          ]}
          success
        />
      </div>
      <Title as="h5">With Form.Field</Title>
      <div className="grid grid-cols-2 items-center gap-2 my-2">
        <Form.Field label="Label" id="name">
          <Select
            placeholder="Insert text here..."
            options={[
              { label: "First", value: "first" },
              { label: "Second", value: "second" },
              { label: "Third", value: "third" }
            ]}
          />
        </Form.Field>
      </div>
      <Title as="h4">Radios</Title>
      <div className="flex flex-col gap-2 my-2">
        <Radio id="male" label="Male" />
        <Radio id="female" label="Female" />
      </div>
      <Title as="h4">Checkboxes</Title>
      <div className="flex flex-col gap-2 my-2">
        <Checkbox id="first" label="First" />
        <Checkbox id="second" label="Second" />
      </div>
      <Title as="h4">Switches</Title>
      <div className="flex flex-col gap-2 my-2">
        <Switch label="Switch" />
      </div>
    </div>
  );
}
