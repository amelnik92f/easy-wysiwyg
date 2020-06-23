import { FormatButtonWrapper } from "../FormatButtonWrapper";
import { CreateMediaButtonWrapper } from "../CreateMediaButtonWrapper";
import { formatAlignActions, formatTextActions } from "../../core";

import styles from "./styles.module.scss";

const { actionWrapper: actionWrapperCx } = styles;

const actionsToSubscribe = [formatTextActions, formatAlignActions];

export const ActionWrapper = (): HTMLElement => {
  const actionWrapper = document.createElement("div");

  actionWrapper.className = actionWrapperCx;

  const formatButtonWrappers = actionsToSubscribe.map(FormatButtonWrapper);
  const createButtonWrapper = CreateMediaButtonWrapper();
  const selectElem = document.createElement("div");

  selectElem.innerText = "Insert";

  actionWrapper.append(
    ...formatButtonWrappers,
    createButtonWrapper,
    selectElem
  );

  return actionWrapper;
};
