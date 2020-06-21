import styles from "./styles.module.scss";
import { eventsToSubscribe } from "../../core/communicate";
import { FormatButtonWrapper } from "../FormatButtonWrapper";

const { actionWrapper: actionWrapperCx } = styles;

export const ActionWrapper = (): HTMLElement => {
  const actionWrapper = document.createElement("div");

  actionWrapper.className = actionWrapperCx;

  eventsToSubscribe.forEach((event) => {
    const container = FormatButtonWrapper(event);
    actionWrapper.appendChild(container);
  });

  return actionWrapper;
};
