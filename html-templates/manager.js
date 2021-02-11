
function generateManager(manager) {
    return `
<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-header">
        <h3 class="card-title">${manager.managerName}</h3>
        <h4 class="card-subtitle">{{role}}</h4>
    </div>
    <div class="card-body bg-secondary">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.managerId}</li>
            <li class="list-group-item">Email: ${manager.managerEmail}</li>
            <li class="list-group-item">Office Number: ${manager.managerPhone}</li>
        </ul>
    </div>
</div>
`;
}

module.exports = generateMarkdown;