// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
function init() {

    getAnswers()
    renderLicense(answer)
    generateMarkdown(answer)
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();