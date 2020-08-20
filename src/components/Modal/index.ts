import { DIMMER } from "../../constants";
import styles from "./styles.module.scss";
import { ModalProps } from "../../types";

const {
  dimmer,
  modal,
  modal__header,
  modal__body,
  modal__close,
  modal__input,
  modal__actions,
  modal__button,
} = styles;

console.log(styles);

export const Modal = ({
  title,
  onSubmit,
  onClose,
}: ModalProps): HTMLDivElement => {
  const modalWrapper = document.createElement("div");

  modalWrapper.className = dimmer;
  modalWrapper.id = DIMMER;

  modalWrapper.innerHTML = `
        <div class="${modal}">
            <div class="${modal__header}">
                ${title}
                <button id="modalClose" class="${modal__close}"></button>
            </div>
            <div class="${modal__body}">
                <input id="modalInput" class="${modal__input}" />
                <div class="${modal__actions}">
                    <button id="modalSubmit" class="${modal__button} modal__submit">Submit</button>
                </div>
            </div>
        </div>
  `;

  const submit = modalWrapper.querySelector("#modalSubmit");
  const input = modalWrapper.querySelector<HTMLInputElement>("#modalInput");
  const close = modalWrapper.querySelector("#modalClose");

  submit?.addEventListener("click", () => {
    const value = input?.value;

    if (value) {
      onSubmit(value);
    }

    onClose();
  });

  close?.addEventListener("click", onClose);
  modalWrapper?.addEventListener("click", ({ target }: MouseEvent) => {
    // @ts-ignore
    if (target.id === DIMMER) {
      onClose();
    }
  });

  return modalWrapper;
};
