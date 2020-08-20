import { MODAL_EVENT } from "./events";
import { ModalProps } from "../../types";
import { Modal } from "../../components/Modal";
import { DIMMER, ROOT } from "../../constants";
import { UsualEvent } from "../../utils";

export const modalBus = {
  [MODAL_EVENT.OPEN]: ({ payload }: UsualEvent<ModalProps>): void => {
    const modal = Modal(payload as ModalProps);

    const root = document.getElementById(ROOT) as HTMLElement;
    root.appendChild(modal);
  },
  [MODAL_EVENT.CLOSE]: (): void => {
    const root = document.getElementById(ROOT) as HTMLElement;
    const modal = document.getElementById(DIMMER) as HTMLElement;
    root.removeChild(modal);
  },
};
