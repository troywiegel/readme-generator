// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = []

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Give a brief Bio about yourself.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'tests',
        },
    ])

// TODO: Create a function to write README file
fs.writeFile('README.md', readMe, function (err) {

    err ? console.error(err) : console.log('Success!')

})

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
