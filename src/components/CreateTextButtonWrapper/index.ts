import { createTextActions, FORMAT_EVENT } from "../../core";
import { IconButton } from "../IconButton";
import { publish } from "../../createAppEventBus";

import styles from "./styles.module.scss";

const { createButtonWrapper: createButtonWrapperCx } = styles;

export const CreateTextButtonWrapper = (): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.className = createButtonWrapperCx;

  createTextActions.forEach(({ action, value, title }) => {
    const button = IconButton({
      action,
      title,
      onClick: () =>
        publish(FORMAT_EVENT.ELEMENT, { type: action, payload: value }),
    });
    wrapper.appendChild(button);
  });

  return wrapper;
};
