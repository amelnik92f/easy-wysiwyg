import { CommonButtonProps } from "../../types";
import styles from "./styles.module.scss";

const { editButton } = styles;

export const IconButton = ({
  title,
  icon,
  onClick,
}: CommonButtonProps): HTMLButtonElement => {
  const button = document.createElement("button");

  button.className = editButton;

  button.title = title;

  if (icon) {
    button.classList.add(`ewg-icon-${icon}`);
  } else {
    button.innerText = title;
  }

  button.addEventListener("click", onClick);

  return button;
};
