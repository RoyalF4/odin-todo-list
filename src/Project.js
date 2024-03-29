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

    get length() {
        return this._list.length;
    }

    get list() {
        return this._list;
    }

    get name() {
        return this._name;
    }

    set index(index) {
        this._index = index;
    }

    set name(name) {
        this._name = name;
    }
}