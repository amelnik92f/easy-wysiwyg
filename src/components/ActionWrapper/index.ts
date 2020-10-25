import { FormatButtonWrapper } from "../FormatButtonWrapper";
import { formatAlignActions, formatTextActions } from "../../core";

import styles from "./styles.module.scss";
import { CreateTextButtonWrapper } from "../CreateTextButtonWrapper";

const { actionWrapper: actionWrapperCx } = styles;

const actionsToSubscribe = [formatTextActions, formatAlignActions];

export const ActionWrapper = (): HTMLElement => {
  const actionWrapper = document.createElement("div");

  actionWrapper.className = actionWrapperCx;

  const formatButtonWrappers = actionsToSubscribe.map(FormatButtonWrapper);
  const textButtonWrapper = CreateTextButtonWrapper();

  actionWrapper.append(...formatButtonWrappers, textButtonWrapper);

  return actionWrapper;
};
