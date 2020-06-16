import { ButtonMeta } from "./types";
import { formatText } from "./formatText";
import styles from "./styles.module.scss";

const { textArea, wrapper } = styles;

export const createMountRoot = (): HTMLElement => {
  const mountRoot = document.createElement("div");
  mountRoot.id = "EWGRoot";
  mountRoot.className = wrapper;

  return mountRoot;
};

export const createButton = ({
  title,
  action,
  value,
}: ButtonMeta): HTMLButtonElement => {
  const button = document.createElement("button");

  button.innerText = title;
  button.dataset.action = action;
  button.dataset.value = value;

  return button;
};

export const createActionWrapper = (): HTMLElement => {
  const actionWrapper = document.createElement("div");

  actionWrapper.className = "EW-action-wrapper";

  actionWrapper.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const { action, value } = target.dataset;

    if (action) {
      formatText(action, value);
    }
  });

  return actionWrapper;
};

export const createEditingArea = (): HTMLElement => {
  const editingArea = document.createElement("div");
  editingArea.className = textArea;
  editingArea.contentEditable = "true";
  editingArea.addEventListener("keyup", ({ code, altKey, ctrlKey }) => {
    if (code === "Enter") {
      if (altKey) {
        formatText("removeFormat");
      }
      if (ctrlKey) {
        formatText("formatBlock", "p");
      }
    }
  });

  formatText("defaultParagraphSeparator", "p");

  return editingArea;
};
