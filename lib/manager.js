
function generateManager(manager) {
    return `

<div class="card manager text-white bg-dark mb-3" style="max-width: 20rem;">
    <div class="card-header text-center">
        <h3 class="card-title">${manager.managerName}</h3>
        <h4 class="card-subtitle">Manager</h4>
    </div>
     <div class="card-body bg-info">
        <ul class="list-group list-group-flush">
            <li class="list-group-item text-black">ID: ${manager.managerId}</li>
            <li class="list-group-item text-black">Email: ${manager.managerEmail}</li>
            <li class="list-group-item text-black">Office Number: ${manager.managerPhone}</li>
        </ul>
    </div>
    </div>
</div>
`;
}

module.exports = generateManager;