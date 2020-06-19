import { formatText } from "../../core";
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
        formatText("formatBlock", "p");
      }

      if (altKey) {
        formatText("removeFormat");
      }

      if (ctrlKey) {
        formatText("formatBlock", "p");
      }
    }
  });

  return editingArea;
};
