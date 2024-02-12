export {initialPageLoad};
import {addProjectBtn, addProjectModal} from "./modules/addProject";
import displayProjects from "./modules/displayProjects";

const body = document.querySelector('body');

function initialPageLoad(projectList) {
    body.appendChild(addProjectModal(projectList));

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarHeading = document.createElement('h2');
    sidebarHeading.textContent = 'Projects';
    sidebar.appendChild(sidebarHeading);

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('project-container');
    sidebar.appendChild(projectsContainer);

    sidebar.appendChild(addProjectBtn());

    // Create content container
    const content = document.createElement('div');
    content.classList.add('content');

    // Create content project header
    const contentHeader = document.createElement('h1');
    contentHeader.classList.add('content-header');
    contentHeader.textContent = 'Default';
    content.appendChild(contentHeader);


    body.appendChild(sidebar);
    body.appendChild(content);

    // Load projects in sidebar
    displayProjects(projectList);
    
}

