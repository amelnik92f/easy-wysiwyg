import { ActionWrapper, EditingArea, Root } from "./components";
import { setup } from "./utils";
import { createAppEventBus, publish, subscribe } from "./createAppEventBus";

import "./styles";

const createEWG = (): HTMLElement => {
  const mountRoot = Root();

  const actionWrapper = ActionWrapper();
  const editingArea = EditingArea();

  mountRoot.append(actionWrapper, editingArea);

  createAppEventBus();

  setup();

  return mountRoot;
};

// in case you want to use it just in HTML init
const initApp = (root: HTMLElement): void => {
  const app = createEWG();

  root.appendChild(app);
};

export { createEWG, initApp, publish, subscribe };
