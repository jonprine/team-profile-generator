const Manager = require('./lib/Manager');
const Render = require('./src/htmlrenderer');

const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

function init() {
    promptManager();
}

// array of questions for user
function promptManager() {
    inquirer
        .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager\'s name?'
        
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the team manager\'s ID number?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team manager\'s email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?'
    },
    {
        type: 'list',
        name: 'teamList',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer\'s name?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s ID number?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineer\'s email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s Github username?'
    },
    {
        type: 'input',
        name: 'internName',
        message: 'What is your intern\'s name?'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is your intern\'s ID?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your intern\'s email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your intern\'s school?'
    }

])
.then(answers => {
    const addManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    employees.push(addManager);
    console.log(addManager);
    Render(employees);
    
})
.catch(error => {
    if(error.isTtyError) {
        console.log('Team member could not be added. Please try again');
      } else {
        // Something else when wrong
      }
    });
};


// function call to initialize program
init();