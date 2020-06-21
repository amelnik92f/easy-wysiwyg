import styles from "./styles.module.scss";
import { formatActions, FORMAT_EVENT } from "../../core";
import { FormatButton } from "../FormatButton";
import { CommonButtonProps } from "../../types";

const { formatButtonWrapper } = styles;

export const FormatButtonWrapper = (event: FORMAT_EVENT): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.className = formatButtonWrapper;

  formatActions[event].forEach((data: CommonButtonProps) => {
    const button = FormatButton({
      ...data,
      event: event,
    });

    wrapper.appendChild(button);
  });

  return wrapper;
};
