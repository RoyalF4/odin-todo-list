export {initialPageLoad};
import {addProjectBtn, addProjectModal} from "./modules/addProject";
import displayProjects from "./modules/displayProjects";

const body = document.querySelector('body');

function createElements() {

    function createButton(text) {
        const button = docuement.createElement('button');
        button.textContent = text;
        return button;
    };

    return {creatButton};
}

function initialPageLoad(projectList) {
    body.appendChild(addProjectModal(projectList));

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarHeading = document.createElement('h2');
    sidebarHeading.textContent = 'Projects';
    sidebar.appendChild(sidebarHeading);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');
    sidebar.appendChild(projectsContainer);

    sidebar.appendChild(addProjectBtn());


    body.appendChild(sidebar);

    // Load projects in sidebar
    displayProjects(projectList);
    
}

