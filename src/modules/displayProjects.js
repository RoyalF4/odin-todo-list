export default displayProjects;

function displayProjects(projectList) {
    const container = document.createElement('div');
    container.classList.add('project-container');

    for(let i in projectList.list) {
        const button = document.createElement('button');
        button.textContent = projectList.list[i].name;
        container.appendChild(button);
    }

    return container;
}