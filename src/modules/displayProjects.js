export default displayProjects;

let currentProject;

function displayProjects(projectList) {
    const container = document.querySelector('.project-container');
    container.innerHTML = '';

    for(let i in projectList.list) {
        const button = document.createElement('button');
        button.classList.add('project-button')
        button.addEventListener('click', () => {
            // change content header text upon click
            const contentHeader = document.querySelector('.content-header');
            const projectButtons = document.querySelectorAll('.project-button');
            contentHeader.textContent = projectList.list[i].name;

            // remove active class from projects
            projectButtons.forEach(button => button.classList.remove('active-project'));
            
            // add active class to current project
            button.classList.add('active-project');
            currentProject = i;
        });

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('project-name-span');
        nameSpan.textContent = projectList.list[i].name;
        button.appendChild(nameSpan);

        const count = document.createElement('div');
        count.classList.add('project-todo-count');
        count.textContent = projectList.list[i].length;
        button.appendChild(count);

        // create dropdown
        const dropDown = document.createElement('div');
        dropDown.classList.add('dropdown');
        const dropDownBtn = document.createElement('button');
        dropDownBtn.addEventListener('click', ()=> {
            dropDownOptions.classList.add('visible');
        })
        // close drop down if button loses focus
        dropDownBtn.addEventListener('blur', () => {
            setTimeout(() => dropDownOptions.classList.remove('visible'), 200)
        })
        dropDown.appendChild(dropDownBtn);
        // create dropdown options
        const dropDownOptions = document.createElement('div');
        dropDownOptions.classList.add('dropDownContent');
        dropDownOptions.classList.add('hidden');
        const dropDownArr = ['Rename', 'Delete'];
        for(let j = 0; j < 2; j++) {
            const dropDownOption = document.createElement('button');
            dropDownOption.dataset.index = i;
            dropDownOption.addEventListener('click', (e) => {
                if(dropDownArr[j] == 'Rename') {
                    const modal = document.querySelector('#renameModal');
                    const modalForm = document.querySelector('#renameModalForm');
                    modal.showModal();
                    modalForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const fd = new FormData(modalForm);
                        const fdObj = Object.fromEntries(fd);
                        projectList.list[i].name = fdObj.name;
                        displayProjects(projectList);
                        const contentHeader = document.querySelector('.content-header');
                        contentHeader.textContent = projectList.list[i].name;
                        modal.close();
                    })
                }
                dropDownOptions.classList.remove('visible');
            })
            dropDownOption.textContent = dropDownArr[j];
            dropDownOptions.appendChild(dropDownOption);
        }
        dropDown.appendChild(dropDownOptions);
        // const dropDown = document.createElement('img');
        // dropDown.src = '../src/images/dots-vertical.svg';
        // button.appendChild(dropDown);
        button.appendChild(dropDown);
        container.appendChild(button);
    }

    // keep active project after adding one
    const projectButtons = document.querySelectorAll('.project-button');
    if(currentProject != undefined) projectButtons[currentProject].classList.add('active-project');

}