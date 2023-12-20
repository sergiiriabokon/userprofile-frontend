interface EventListener {
  notify(): void;
}

class UserCreatedEvent {
  private _observers: EventListener[] = [];

  constructor() {}
  
  notifySubscibers() {
    this._observers.forEach(o => o.notify() );
  }

  subscribe(observer: EventListener) {
    this._observers.push(observer);
  }
}

export default new UserCreatedEvent();