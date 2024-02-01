fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        var projectsDiv = document.getElementById('projects');
        projects.forEach(project => {
            var projectDiv = document.createElement('div');
            projectDiv.textContent = project.name;
            projectsDiv.appendChild(projectDiv);
        });
    });