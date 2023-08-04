const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        choices: ['View All Employees', 
            'Add Employee', 
            'Update Employee Role', 
            'View All Roles', 
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit',
            'View All Employees'],
        message: 'What would you like to do?',
        name: 'choices'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
       console.log(response)
    );
}

// Function call to initialize app
init();