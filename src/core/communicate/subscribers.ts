import { CREATE_EVENT, FORMAT_EVENT, MODAL_EVENT } from "../events";
import { format } from "../format";
import { PubSub } from "../../utils";
import { FormatEventHandler } from "../../types";

export const pubSub = new PubSub();

const eventHandler: FormatEventHandler<string | undefined> = ({
  type,
  payload,
}) => {
  format(type, payload);
};

export const formatEventsToSubscribe = [FORMAT_EVENT.TEXT, FORMAT_EVENT.ALIGN];

export const createEventToSubscribe = [
  CREATE_EVENT.MEDIA,
  CREATE_EVENT.ELEMENT,
];

[...formatEventsToSubscribe, ...createEventToSubscribe].forEach((event) => {
  pubSub.subscribe(event, eventHandler);
});

pubSub.subscribe(MODAL_EVENT.OPEN, console.log);
