import { SimpleHandler } from "../types";
import { Icon } from "./Icon";

export function CloseButton({ onClick }: { onClick: SimpleHandler }) {
  return (
    <button
      type="button"
      className="text-neutral dark:text-neutral-extra-light bg-transparent hover:bg-neutral-extra-light dark:hover:bg-neutral rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
      onClick={onClick}
      data-testid="CloseButton"
    >
      <Icon name="Close" />
    </button>
  );
}
