// Intern card template
function generateIntern(intern) {
    return `
<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-header text-center">
        <h3 class="card-title">${intern.name}</h3>
        <h4 class="card-subtitle">${intern.role}</h4>
    </div>
    <div class="card-body bg-secondary text-black">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: </span><a href="mailto:${intern.email}">${intern.email}</a></li>            
            <li class="list-group-item">University: ${intern.school}</li>
        </ul>
    </div>
</div>
`;
}


module.exports = generateIntern;