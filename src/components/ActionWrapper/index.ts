import styles from "./styles.module.scss";
import { formatEventsToSubscribe } from "../../core/communicate";
import { FormatButtonWrapper } from "../FormatButtonWrapper";
import { CreateMediaButtonWrapper } from "../CreateMediaButtonWrapper";

const { actionWrapper: actionWrapperCx } = styles;

export const ActionWrapper = (): HTMLElement => {
  const actionWrapper = document.createElement("div");

  actionWrapper.className = actionWrapperCx;

  const formatButtonWrappers = formatEventsToSubscribe.map(FormatButtonWrapper);
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
