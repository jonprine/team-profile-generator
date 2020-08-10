const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require('./src/htmlrenderer');


const fs = require("fs");
const inquirer = require("inquirer");


const employees = [];
let holdEmployeeData = "";



function init() {
  promptManager();

}
  


// array of questions for user

// questons for team manager
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID number?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      const addManager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      employees.push(addManager);
      console.log(addManager);
      addNewMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Team member could not be added. Please try again");
      } else {
        // Something else when wrong
      }
    });
}

// function to add another team member per selection from list

function addNewMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamList",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"],
        default: "None",
      },
    ])
    .then((answers) => {
      if (answers.teamList === "Engineer") {
        addEngineer();
      } else if (answers.teamList === "Intern") {
        addIntern();
      } else if (answers.teamList === "None") {
        renderHTML();
        writeFile(holdEmployeeData);

      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Team member could not be added. Please try again");
      } else {
        // Something else when wrong
      }
    });
}

// if engineer is selected
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's Github username?",
      },
    ])
    .then((answers) => {
      const addEngineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      employees.push(addEngineer);
      console.log(addEngineer);
      addNewMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Team member could not be added. Please try again");
      } else {
        // Something else when wrong
      }
    });
}

// if intern is selected
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
      },
    ])
    .then((answers) => {
      const addIntern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      employees.push(addIntern);
      console.log(addIntern);
      addNewMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Team member could not be added. Please try again");
      } else {
        // Something else when wrong
      }
    });
}

function renderHTML(){
  holdEmployeeData = render(employees);
}

// function to generate index
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, 
  err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Your team profile has been successfully created.')
    }
  } )
};

// function call to initialize program
init();
