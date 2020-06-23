import { FORMAT_EVENT } from "../../core";
import styles from "./styles.module.scss";
import { publish } from "../../createAppEventBus";

const { textArea } = styles;

const createParagraphEvent = {
  type: "formatBlock",
  payload: "p",
};

export const EditingArea = (): HTMLElement => {
  const editingArea = document.createElement("div");

  editingArea.className = textArea;
  editingArea.contentEditable = "true";

  editingArea.addEventListener("keyup", ({ code, altKey, ctrlKey }) => {
    if (code === "Enter") {
      const selection = window.getSelection();
      const tagName = selection?.focusNode?.nodeName;

      if (tagName === "BLOCKQUOTE" || tagName === "PRE") {
        publish(FORMAT_EVENT.ELEMENT, createParagraphEvent);
      }

      if (altKey) {
        publish(FORMAT_EVENT.ELEMENT, {
          type: "removeFormat",
        });
      }

      if (ctrlKey) {
        publish(FORMAT_EVENT.ELEMENT, createParagraphEvent);
      }
    }
  });

  return editingArea;
};
