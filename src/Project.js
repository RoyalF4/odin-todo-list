import fixIndex from "./fixIndex";
export default Project;

class Project {
    constructor(index, name) {
        this._index = index;
        this._name = name;
        this._list = [];
    }

    addTodo(todo) {
        this._list.push(todo);
    }

    removeTodo(todo) {
        this._list = fixIndex(this._list.filter((element) => !_.isEqual(element, todo)));
    }

    get index() {
        return this._index;
    }

    set index(index) {
        this._index = index;
    }

    get list() {
        return this._list;
    }

    get name() {
        return this._name;
    }
}