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
    const sidebarHeading = document.createElement('h2');

    sidebarHeading.textContent = 'Projects';
    sidebar.classList.add('sidebar');
    sidebar.appendChild(sidebarHeading);
    sidebar.appendChild(displayProjects(projectList));
    sidebar.appendChild(addProjectBtn(projectList));



    body.appendChild(sidebar);
    
}

