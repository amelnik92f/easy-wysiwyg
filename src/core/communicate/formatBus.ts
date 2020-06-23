import { format } from "../format";
import { FORMAT_EVENT } from "./events";
import { UsualEvent } from "../../utils";

const formatEventHandler = ({ type, payload }: UsualEvent<string>): void =>
  format(type, payload);

export const formatBus = {
  [FORMAT_EVENT.ELEMENT]: formatEventHandler,
};
