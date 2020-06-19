import { ActionWrapper, Button, EditingArea, Root } from "./components";
import { actions, setup } from "./core";
import "./styles";

export const createEWG = (): HTMLElement => {
  const mountRoot = Root();

  const actionWrapper = ActionWrapper();

  const editingArea = EditingArea();

  actions.forEach((data) => {
    const btn = Button(data);
    actionWrapper.appendChild(btn);
  });

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
