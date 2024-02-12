import _ from 'lodash';
import './css/reset.css';
import './css/style.css';
import './images/dots-vertical.svg';
import Todo from './Todo.js';
import Project from './Project.js';
import ProjectList from './ProjectList.js';
import { initialPageLoad } from './UI.js';

const projectList = new ProjectList();
const projectDefault = new Project(0,'Default');

projectList.addProject(projectDefault);

initialPageLoad(projectList);