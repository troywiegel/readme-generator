const inquirer = require('inquirer')
const {generateMarkdown, renderLicense} = require('./utils/generate.js')

// function to get answers from user input
function getAnswers() {
    // using inquirer package to ask the questions
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'list',
                message: 'Choose the appropriate license for this project: ',
                name: 'license',
                choices: [
                    'Apache',
                    'Boost',
                    'MIT',
                    'Mozilla'
                ]
            },
            {
                type: 'input',
                message: 'Describe your project: ',
                name: 'description',
            },
            {
                type: 'input',
                message: 'List any installation instructions for this project: ',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'List any usage instructions for this project: ',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'List any contributors on this project: ',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'List any testing instructions for this project: ',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            }
        ])
        .then((answer) => {
            // funciton to add readme license options
            renderLicense(answer)
            // generates the readme file
            generateMarkdown(answer)
        })
}

// initializes app
function init() {
    getAnswers()
}

init();