const inquirer = require('inquirer')
const fs = require('fs')

function init() {
    getAnswers()
}

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

            renderLicense(answer)
            generateMarkdown(answer)
        })
}

function renderLicense(answer) {

    switch (answer.license) {

        case 'Apache':
            licenseBadge = `![Badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
            licenseLink = `[Apache License Information](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case 'Boost':
            licenseBadge = `![Badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
            licenseLink = `[Boost License Information](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case 'MIT':
            licenseBadge = `![Badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
            licenseLink = `[MIT License Information](https://opensource.org/licenses/MIT)`;
            break;
        case 'Mozilla':
            licenseBadge = `![Badge](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
            licenseLink = `[Mozilla License Information](https://opensource.org/licenses/MPL-2.0)`;
            break;
    }
}

function generateMarkdown(answer) {

    const readme = `# ${answer.title}

${licenseBadge}
                        
## Description
---
💻 ${answer.description}
                        
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
💾 ${answer.installation}
                        
## Usage
---
💻 ${answer.usage}

## License
---
This project is licenesed by ${answer.license}.
<br>
🔍 ${licenseLink}

## Contributing
---
👪 ${answer.contribution}
                        
## Tests
---
✏️ ${answer.tests}
                        
## Questions
---
Reach out with any questions you have!
<br>
✉️ [GitHub](https://github.com/${answer.github}) --- [Email](${answer.email})
`

    fs.writeFile('README.md', readme, function (err) {

        err ? console.error(err) : console.log('✔️ Success! Wrote the README.md ✔️')

    })
}

init();