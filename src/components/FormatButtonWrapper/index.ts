import { formatActions, FORMAT_EVENT, pubSub } from "../../core";
import { IconButton } from "../IconButton";
import { UIButtonProps } from "../../types";

import styles from "./styles.module.scss";

const { formatButtonWrapper } = styles;

export const FormatButtonWrapper = (event: FORMAT_EVENT): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.className = formatButtonWrapper;

  formatActions[event].forEach((data: UIButtonProps) => {
    const button = IconButton({
      ...data,
      onClick: () => pubSub.publish(event, { type: data.action }),
    });

    wrapper.appendChild(button);
  });

  return wrapper;
};
