import { FORMAT_EVENT } from "../../core";
import { IconButton } from "../IconButton";
import { publish } from "../../createAppEventBus";
import { UIButtonProps } from "../../types";

import styles from "./styles.module.scss";

const { formatButtonWrapper } = styles;

export const FormatButtonWrapper = (actions: UIButtonProps[]): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.className = formatButtonWrapper;

  actions.forEach((data: UIButtonProps) => {
    const button = IconButton({
      ...data,
      onClick: () => publish(FORMAT_EVENT.ELEMENT, { type: data.action }),
    });

    wrapper.appendChild(button);
  });

  return wrapper;
};
