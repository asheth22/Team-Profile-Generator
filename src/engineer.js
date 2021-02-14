// Engineer card template
function generateEngineer(engineer) {
    return `
<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-header text-center">
        <h3 class="card-title">${engineer.name}</h3>
        <h4 class="card-subtitle">${engineer.role}</h4>
    </div>
    <div class="card-body bg-secondary text-black">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>            
            <li class="list-group-item">GitHub: </span><a href="https://github.com/${engineer.github}" target="_blank" rel="noopener"> ${engineer.github}</a></li>
        </ul>
    </div>
</div>
`;
}

module.exports = generateEngineer;