import { MODAL_EVENT, createMediaActions, FORMAT_EVENT } from "../../core";
import { IconButton } from "../IconButton";
import { publish } from "../../createAppEventBus";
import { ModalButtonProps } from "../../types";

import styles from "./styles.module.scss";

const { createButtonWrapper: createButtonWrapperCx } = styles;

export const CreateMediaButtonWrapper = (): HTMLElement => {
  const wrapper = document.createElement("div");

  wrapper.className = createButtonWrapperCx;

  createMediaActions.forEach((data: ModalButtonProps) => {
    const button = IconButton({
      ...data,
      onClick: () =>
        publish(MODAL_EVENT.OPEN, {
          type: data.action,
          payload: {
            title: data.modalTitle,
            onSubmit: (value: string) => () => {
              publish(FORMAT_EVENT.ELEMENT, {
                type: data.action,
                payload: value,
              });
            },
            onClose: () => {
              publish(MODAL_EVENT.CLOSE, {
                type: MODAL_EVENT.CLOSE,
                payload: {},
              });
            },
          },
        }),
    });
    wrapper.appendChild(button);
  });

  return wrapper;
};
