import { ButtonMeta } from "../../types";
import styles from "./styles.module.scss";

const { editButton } = styles;

export const Button = ({
  title,
  action,
  value,
  icon,
  onClick,
}: ButtonMeta): HTMLButtonElement => {
  const button = document.createElement("button");

  button.className = editButton;
  button.dataset.action = action;
  button.title = title;

  if (value) {
    button.dataset.value = value;
  }

  if (icon) {
    button.classList.add(`ewg-icon-${icon}`);
  } else {
    button.innerText = title;
  }

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
};
