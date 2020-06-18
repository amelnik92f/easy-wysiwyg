import {
  createActionWrapper,
  createButton,
  createEditingArea,
  createMountRoot,
} from "./markup";
import { actions } from "./actionConfig";

import "./styles/index.scss";

export const createEWG = (): HTMLElement => {
  const mountRoot = createMountRoot();

  const actionWrapper = createActionWrapper();

  const editingArea = createEditingArea();

  actions.forEach((data) => {
    const btn = createButton(data);
    actionWrapper.appendChild(btn);
  });

  mountRoot.appendChild(actionWrapper);
  mountRoot.appendChild(editingArea);

  return mountRoot;
};

// in case you want to use it just in HTML init
export const initApp = (root: HTMLElement): void => {
  const app = createEWG();

  root.appendChild(app);
};
