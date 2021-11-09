const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function getAnswers() {

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
}

function renderLicense(answer) {

  switch (answer.license) {

    case 'Apache':
      licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      licenseLink = `[Apache License Information](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'Boost':
      licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
      licenseLink = `[Boost License Information](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'MIT':
      licenseBadge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      licenseLink = `[MIT License Information](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla':
      licenseBadge = `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
      licenseLink = `[Mozilla License Information](https://opensource.org/licenses/MPL-2.0)`;
      break;

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

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
}

module.exports = getAnswers(); renderLicense(answer); generateMarkdown(answer);