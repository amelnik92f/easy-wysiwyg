import { format } from "../../core";
import styles from "./styles.module.scss";

const { textArea } = styles;

// "format/text" - b, i, u, s, x1, x2
// "format/align" - 4 aligns
// "format/createElement" - p, h1-h6, quote, code, Link, image, video?
// "modal/open"
// "modal/close"

export const EditingArea = (): HTMLElement => {
  const editingArea = document.createElement("div");

  editingArea.className = textArea;
  editingArea.contentEditable = "true";

  editingArea.addEventListener("keyup", ({ code, altKey, ctrlKey }) => {
    if (code === "Enter") {
      const selection = window.getSelection();
      const tagName = selection?.focusNode?.nodeName;

      if (tagName === "BLOCKQUOTE" || tagName === "PRE") {
        format("formatBlock", "p");
      }

      if (altKey) {
        format("removeFormat");
      }

      if (ctrlKey) {
        format("formatBlock", "p");
      }
    }
  });

  return editingArea;
};
