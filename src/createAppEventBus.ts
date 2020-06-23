import { formatBus, modalBus } from "./core";
import { PubSub, SubscriberCallback, Subscription, UsualEvent } from "./utils";

const combined = { ...formatBus, ...modalBus };

const eventBus = new PubSub();

export const createAppEventBus = (): void => {
  Object.entries(combined).forEach(([event, handler]) =>
    eventBus.subscribe(event, handler)
  );
};

export const publish = <T = string>(event: string, data: UsualEvent<T>): void =>
  eventBus.publish(event, data);

export const subscribe = <T>(
  event: string,
  callback: SubscriberCallback<T>
): Subscription => eventBus.subscribe(event, callback);
