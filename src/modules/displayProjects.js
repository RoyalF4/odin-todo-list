export default displayProjects;

function displayProjects(projectList) {
    const container = document.querySelector('.projects-container');
    container.innerHTML = '';

    for(let i in projectList.list) {
        const button = document.createElement('button');
        button.textContent = projectList.list[i].name;
        container.appendChild(button);
    }

}