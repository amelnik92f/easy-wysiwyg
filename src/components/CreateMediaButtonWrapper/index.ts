import { pubSub, createActions, CREATE_EVENT, MODAL_EVENT } from "../../core";
import { IconButton } from "../IconButton";
import { UIButtonProps } from "../../types";

import styles from "./styles.module.scss";

const { createButtonWrapper: createButtonWrapperCx } = styles;

export const CreateMediaButtonWrapper = (): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.className = createButtonWrapperCx;

  createActions[CREATE_EVENT.MEDIA].forEach((data: UIButtonProps) => {
    const button = IconButton({
      ...data,
      onClick: () =>
        pubSub.publish(MODAL_EVENT.OPEN, {
          type: data.action,
          payload: {
            onSubmit: (value: string) => () => {
              pubSub.publish(CREATE_EVENT.MEDIA, {
                type: data.action,
                payload: value,
              });
            },
          },
        }),
    });
    wrapper.appendChild(button);
  });

  return wrapper;
};
