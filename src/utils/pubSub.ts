export interface Subscribers {
  [key: string]: SubscriberCallback[];
}

export interface Subscription {
  unsubscribe: (event: string, index: number) => void;
}

export type UsualEvent<T> = {
  type: string;
  payload?: T;
};

export type SubscriberCallback<T = any> = (data: UsualEvent<T>) => void;

export class PubSub {
  private subscribers: Subscribers = {};

  public publish<T>(event: string, data: UsualEvent<T>): void {
    if (!this.subscribers[event]) {
      return;
    }

    this.subscribers[event].forEach((subscriberCallback) =>
      subscriberCallback(data)
    );
  }

  public subscribe<T>(
    event: string,
    callback: SubscriberCallback<T>
  ): Subscription {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    const index = this.subscribers[event].push(callback) - 1;

    return {
      unsubscribe: () => this.unsubscribe(event, index),
    };
  }

  private unsubscribe(event: string, index: number) {
    this.subscribers[event].splice(index, 1);
  }
}
