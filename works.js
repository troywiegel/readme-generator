// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
function init() {
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
                message: 'Briefly describe your project: ',
                name: 'description',
            },
            {
                type: 'input',
                message: 'List any installation instructions for this project: ',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'What are the usage instructions for this project?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Who contributed to this project?',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'List any testing instructions if applicabable: ',
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
        // TODO: Create a function to write README file
        .then(function (answer) {

            switch (answer.license) {

                case 'Apache':
                    licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
                    break;
                case 'Boost':
                    licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
                    break;
                case 'MIT':
                    licenseBadge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
                    break;
                case 'Mozilla':
                    licenseBadge = `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
                    break;

            }

            const readme = `
# ${answer.title}

## License
---
${licenseBadge}
\
This project is licenesed by ${answer.license}.
\
${licenseLink}
                      
## Description
---
${answer.description}
                      
## Table of Contents
---
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
                      
## Installation
---
${answer.installation}
                      
## Usage
---
${answer.usage}
                      
## Contributing
---
${answer.contributing}
                      
## Tests
---
${answer.tests}
                      
## Questions
---
[GitHub](https://github.com/${answer.github}) [Email](${answer.email})
`

            fs.writeFile('README.md', readme, function (err) {

                err ? console.error(err) : console.log('Success!')

            })
        })
}

// Function call to initialize app
init();