import { CREATE_EVENT, pubSub } from "../../core";
import styles from "./styles.module.scss";

const { textArea } = styles;

export const EditingArea = (): HTMLElement => {
  const editingArea = document.createElement("div");

  editingArea.className = textArea;
  editingArea.contentEditable = "true";

  editingArea.addEventListener("keyup", ({ code, altKey, ctrlKey }) => {
    if (code === "Enter") {
      const selection = window.getSelection();
      const tagName = selection?.focusNode?.nodeName;

      if (tagName === "BLOCKQUOTE" || tagName === "PRE") {
        pubSub.publish(CREATE_EVENT.ELEMENT, {
          type: "formatBlock",
          payload: "p",
        });
      }

      if (altKey) {
        pubSub.publish(CREATE_EVENT.ELEMENT, {
          type: "removeFormat",
        });
      }

      if (ctrlKey) {
        pubSub.publish(CREATE_EVENT.ELEMENT, {
          type: "formatBlock",
          payload: "p",
        });
      }
    }
  });

  return editingArea;
};
