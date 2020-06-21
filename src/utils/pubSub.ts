export interface Subscribers {
  [key: string]: SubscriberCallback[];
}

export interface Subscription {
  unsubscribe: (event: string, index: number) => void;
}

export type UsualEvent = {
  type: string;
  payload?: any;
};

export type SubscriberCallback = (data: UsualEvent) => void;

export class PubSub {
  private subscribers: Subscribers = {};

  public publish(event: string, data: UsualEvent): void {
    if (!this.subscribers[event]) {
      return;
    }

    this.subscribers[event].forEach((subscriberCallback) =>
      subscriberCallback(data)
    );
  }

  public subscribe(event: string, callback: SubscriberCallback): Subscription {
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
