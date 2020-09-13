class TodoListObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((obsFn) => obsFn !== fn);
  }

  notify(data) {
    this.observers.forEach((observerFn) => observerFn(data));
  }
}

const todoListObserverInstance = new TodoListObserver();

export default todoListObserverInstance;
