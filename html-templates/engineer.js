// Engineer card template
function generateEngineer(engineer) {
    return `
<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-header">
        <h3 class="card-title">${engineer.name}</h3>
        <h4 class="card-subtitle">{{role}}</h4>
    </div>
    <div class="card-body bg-secondary">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Office Number: ${engineer.school}</li>
        </ul>
    </div>
</div>
`;
}

module.exports = generateMarkdown;