import { ROOT } from "../../constants";
import styles from "./styles.module.scss";

const { root } = styles;

export const Root = (): HTMLElement => {
  const mountRoot = document.createElement("div");

  mountRoot.id = ROOT;
  mountRoot.className = `EWG-root ${root}`;

  return mountRoot;
};
