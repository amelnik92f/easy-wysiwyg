import { ButtonMeta } from "./types";
import { formatText } from "./formatText";

export const createMountRoot = (): HTMLElement => {
  const mountRoot = document.createElement("div");
  mountRoot.id = "EWGRoot";

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
  editingArea.className = "EW-editing-area";
  editingArea.contentEditable = "true";

  document.execCommand("defaultParagraphSeparator", false, "p");

  return editingArea;
};
