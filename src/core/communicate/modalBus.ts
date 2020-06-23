import { MODAL_EVENT } from "./events";

export const modalBus = {
  [MODAL_EVENT.OPEN]: console.log,
  [MODAL_EVENT.CLOSE]: console.log,
};
