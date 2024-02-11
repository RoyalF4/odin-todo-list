import _ from 'lodash';
import Todo from './Todo.js';
import Project from './Project.js';
import ProjectList from './ProjectList.js';
import { initialPageLoad } from './UI.js';

const projectList = new ProjectList();
const projectHome = new Project(0,'Home');
// const projectWork = new Project(1, 'Work');
// console.log(projectHome);
// console.log(projectWork);
projectList.addProject(projectHome);
// projectList.addProject(projectWork);
// const todo1 = new Todo(0, 'Clean room', 'finish cleaning my room', 'tomorrow', '0', 'none');
// projectHome.addTodo(todo1);


// console.log(projectList.list);
// projectList.removeProject(projectHome);
// console.log(projectList.list);
initialPageLoad(projectList);