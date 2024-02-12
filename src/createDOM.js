export {addSingleInputModal};

function addSingleInputModal(modalId, submitId, label, placeholder) {
    // create dialog element
    const modal = document.createElement('dialog');
    modal.id = modalId;

    // create modal from
    const modalForm = document.createElement('form');
    modalForm.id = `${modalId}Form`;
    const inputDiv = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = label;
    input.required = true;
    input.placeholder = placeholder;
    modal.appendChild(modalForm);
    modalForm.appendChild(inputDiv);
    inputDiv.appendChild(input);

    // create modal submit button
    const modalSubmit = document.createElement('button');
    modalSubmit.id = submitId;
    modalSubmit.textContent = 'Submit';
    modalSubmit.type = 'submit';
    // modalForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const fd = new FormData(modalForm);
    //     const fdObj = Object.fromEntries(fd);
    //     projectList.addProject(new Project(projectList.list.length, fdObj.name));
    //     displayProjects(projectList);
    //     modal.close();
    // })
    modalForm.appendChild(modalSubmit);

    // create modal close button
    const modalClose = document.createElement('button');
    modalClose.textContent = 'Close';
    modalClose.addEventListener('click', () => {
        modal.close();
    })
    modalForm.appendChild(modalClose);

    return modal;
}