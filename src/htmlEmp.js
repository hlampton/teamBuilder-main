const generatePaper = function (arr) {

    let roleInform;

    if (arr.title === "Manager") {
        roleInform = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInform = `Github Username: ${arr.github}`
    } else if (arr.title === "Intern") {
        roleInform = `School: ${arr.school}`
    }

    return `<div class="card">
<div class="card-head">
<h2>${arr.name}</h2>  
<h2><i class="far fa-user"></i> ${arr.title}</h2>
<hr>
</div>
<div class="card-format">
<ul>
    <li>ID: ${arr.id}</li>
    <li>Email: ${arr.email}</li>
    <li>${roleInform} </li>
</ul>
</div>
</div>`
}

exports.generatePaper = generatePaper;