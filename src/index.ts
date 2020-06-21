import { ActionWrapper, EditingArea, Root } from "./components";
import { setup } from "./utils";

import "./styles";

export const createEWG = (): HTMLElement => {
  const mountRoot = Root();

  const actionWrapper = ActionWrapper();

  const editingArea = EditingArea();

  mountRoot.appendChild(actionWrapper);
  mountRoot.appendChild(editingArea);

  setup();

  return mountRoot;
};

// in case you want to use it just in HTML init
export const initApp = (root: HTMLElement): void => {
  const app = createEWG();

  root.appendChild(app);
};
