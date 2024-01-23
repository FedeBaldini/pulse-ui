import { StoryFn } from "@storybook/react";

import { useToast } from "../../contexts";
import { hideControl } from "../../story-utils/hideControl";
import { Button } from "../Button";
import { Toast, ToastProps } from "../Toast";

export default {
  title: "components/Toast",
  component: Toast,
  argTypes: {
    className: hideControl,
    onClose: hideControl
  }
};

export const Standard: StoryFn<ToastProps> = (args) => <Toast {...args} />;
Standard.args = {
  children: "Toast content goes here",
  error: false,
  success: false,
  warning: false
};

function WithUseToastComponent({
  children,
  error,
  warning,
  success
}: ToastProps) {
  const toast = useToast();
  const type = error
    ? "error"
    : warning
      ? "warning"
      : success
        ? "success"
        : undefined;

  return (
    <div className="h-[400px] bg-gray-100">
      <Button onClick={() => toast(children, type)}>Open toast</Button>
    </div>
  );
}

export const WithUseToast: StoryFn<ToastProps> = (args) => (
  <WithUseToastComponent {...args} />
);
WithUseToast.args = {
  children: "Toast content goes here",
  error: false,
  success: false,
  warning: false
};
