class TodoList {
  constructor() {
    if (!TodoList.instance) {
      this._list = [];
      TodoList.instance = this;
    }

    return TodoList.instance;
  }

  generateTaskId() {
    // placeholder for a uuid generator
    return Math.floor(Math.random() * 10000);
  }

  add(text) {
    const item = {
      text,
      id: this.generateTaskId(),
    };

    this._list.push(item);
  }

  remove(id) {
    const removedItemIndex = this._list.findIndex(
      (task) => task.id === parseInt(id)
    );

    this._list.splice(removedItemIndex, 1);
  }

  getAll() {
    return this._list;
  }
}

const todoListInstance = new TodoList();
Object.freeze(todoListInstance);

export default todoListInstance;
