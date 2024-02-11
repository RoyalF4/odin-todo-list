export {addProjectBtn, addProjectModal};

function addProjectBtn(projectList) {
    const button = document.createElement('button');
    const modal = document.querySelector('#addProjectModal');
    button.textContent = 'Add Project';

    button.addEventListener('click', () => {
        modal.showModal();
    })


    return button;
}

function addProjectModal() {
    // create addProjectModal
    const projectModal = document.createElement('dialog');
    const projectModalClose = document.createElement('button');
    projectModal.id = 'addProjectModal';

    projectModalClose.addEventListener('click', () => {
        projectModal.close();
    })

    projectModal.appendChild(projectModalClose);

    return projectModal;

}