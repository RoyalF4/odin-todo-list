import fixIndex from "./fixIndex";
export default ProjectList;

class ProjectList {
    constructor() {
        this._list = [];
    }

    addProject(project) {
        this._list.push(project);
    }

    removeProject(project) {
        this._list = fixIndex(this._list.filter((element) => !_.isEqual(element, project)));
    }

    get list() {
        return this._list;
    }
}