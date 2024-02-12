import Project from "../Project";
import displayProjects from "./displayProjects";

export {addProjectBtn, addProjectModal};

function addProjectBtn() {
    const form = document.querySelector('form');
    const button = document.createElement('button');
    const modal = document.querySelector('#addProjectModal');
    button.classList.add('add-project-btn')
    button.textContent = '+ Add Project';

    button.addEventListener('click', () => {
        form.reset();
        modal.showModal();
    })


    return button;
}

function addProjectModal(projectList) {
    // create dialog element
    const projectModal = document.createElement('dialog');
    projectModal.id = 'addProjectModal';

    // create modal from
    const modalForm = document.createElement('form');
    const inputDiv = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    input.required = true;
    input.placeholder = 'Enter project name...';
    projectModal.appendChild(modalForm);
    modalForm.appendChild(inputDiv);
    inputDiv.appendChild(input);

    // create modal submit button
    const projectModalSubmit = document.createElement('button');
    projectModalSubmit.textContent = 'Submit';
    projectModalSubmit.type = 'submit';
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(modalForm);
        const fdObj = Object.fromEntries(fd);
        projectList.addProject(new Project(projectList.list.length, fdObj.name));
        displayProjects(projectList);
        projectModal.close();
    })
    modalForm.appendChild(projectModalSubmit);

    // create modal close button
    const projectModalClose = document.createElement('button');
    projectModalClose.textContent = 'Close';
    projectModalClose.addEventListener('click', () => {
        projectModal.close();
    })
    modalForm.appendChild(projectModalClose);

    return projectModal;

}