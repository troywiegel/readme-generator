const inquirer = require('inquirer')
const fs = require('fs')


// TODO: Include packages needed for this application
var generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//ask all the questions
//inside the .then(answer)
//generateMarkdown(answer)







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
    .then((answer) => {

        var readMe = `

        # Portfolio

        I created a portfolio to showcase my work. In this portfolio I:

        * Created several buttons and clickable photos that link to my projects and contact information
        * Custom coded all of the HTML and CSS to achieve my desired aesthetic
        * Made my potfolio dynamic and mobile friendly
        -----------------------------------------------------------------------------------------------------------------


        Website Link: https://troywiegel.github.io/portfolio

        Website Screenshots: 

        ![portfolio website screenshot 1](https://troywiegel.github.io/portfolio/assets/img/P1.png)
        `
        fs.writeFile('README.md', readMe, function (err) {

            err ? console.error(err) : console.log('Success!')

        })
    })