import { formatText } from "../../core";
import styles from "./styles.module.scss";

const { actionWrapper: actionWrapperCx } = styles;

export const ActionWrapper = (): HTMLElement => {
  const actionWrapper = document.createElement("div");

  actionWrapper.className = actionWrapperCx;

  actionWrapper.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const { action, value } = target.dataset;

    if (action) {
      formatText(action, value);
    }
  });

  return actionWrapper;
};
