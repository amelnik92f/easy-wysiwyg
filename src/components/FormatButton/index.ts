import { FormatButtonMeta } from "../../types";
import styles from "./styles.module.scss";
import { pubSub } from "../../core/communicate";

const { editButton } = styles;

export const FormatButton = ({
  title,
  action,
  icon,
  event,
}: FormatButtonMeta): HTMLButtonElement => {
  const button = document.createElement("button");

  button.className = editButton;

  button.title = title;

  if (icon) {
    button.classList.add(`ewg-icon-${icon}`);
  } else {
    button.innerText = title;
  }

  button.addEventListener("click", () => {
    pubSub.publish(event, { type: action });
  });

  return button;
};
