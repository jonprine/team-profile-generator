// create HTML card
function generateManager(manager) {
  return `
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">

                </i>
            </div>

            <div class="card-body">
                <p class="id">${manager.id}</p>
                <p class="email">email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
        `;
}

// create HTML card
function generateEngineer(engineer) {
  return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icons">

            </i>
        </div>

        <div class="card-body">
            <p class="id">ID: 333</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>


    </div>
    </div>
`;
}

// create HTML card
function generateIntern(intern) {
  return `
        <div class="col-4 mt-4">
            <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">
    
                </i>
            </div>
    
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
            </div>
        </div>
    
        `;
}

function renderEmployees(data) {
  const html = [];

  for (i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);

      html.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      html.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);

      html.push(internCard);
    }
  }

  const employeeCards = html.join("");

  const generateTeam = renderFullPage(employeeCards);
  return generateTeam;
}

function renderFullPage(employeeCards) {
  // add cards onto entire HTML page
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>

<body>

<div class="container">

    <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
            <h1 class="display-5">My Team</h1>
        </div>
    </div>


    <div class="row justify-content-center" id="team-cards">
     
    ${employeeCards}


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>

`;
}

module.exports = renderEmployees;

//   // push to overall page
//   html.push(
//     employees
//       // Filter employees and take out engineer
//       .filter((employee) => employee.getRole() === "Manager")
//       .map((manager) => generateManager(manager))
//   );

//   // push to overall page
//   html.push(
//     employees
//       .filter((employee) => employee.getRole() === "Engineer")
//       .map((engineer) => generateEngineer(engineer))
//       .join("")
//   );

//   // Filter employees and take out intern
//   employees.filter((e) => e.getRole() === "intern");

//   // push to overall page
//   html.push(
//     employees
//       .filter((employee) => employee.getRole() === "Intern")
//       .map((intern) => generateIntern(intern))
//       .join("")
//   );
