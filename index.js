const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What is the team manager\'s id?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team manager\'s email?'
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: 'What is the team manager\'s office number?'
    },

])
.then(answers => {
    console.log(answers);
    const addManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
    employees.push(addManager);
    
})
.catch(error => {
    console.log('Unable to add team member. Please try again.')
})

};