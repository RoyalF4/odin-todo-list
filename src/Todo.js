export default Todo;

class Todo {
    constructor(index, title, description, dueDate, priority, note) {
        this._index = index;
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._note = note;
    }

    get index() {
        return this._index;
    }

    printTodo() {
        console.log(this);
    }
}