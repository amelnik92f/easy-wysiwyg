import { FORMAT_EVENT } from "../events";
import { format } from "../format";
import { PubSub } from "../../utils";
import { FormatEventHandler } from "../../types";

export const pubSub = new PubSub();

const formatEventHandler: FormatEventHandler = ({ type, payload }) => {
  format(type, payload);
};

export const eventsToSubscribe = [FORMAT_EVENT.TEXT, FORMAT_EVENT.ALIGN];

eventsToSubscribe.forEach((event) => {
  pubSub.subscribe(event, formatEventHandler);
});
