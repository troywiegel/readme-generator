// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (answer.license) {

    case 'Apache':
      licenseLink = `[Apache License Information](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'Boost':
      licenseLink = `[Boost License Information](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'MIT':
      licenseLink = `[MIT License Information](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla':
      licenseLink = `[Mozilla License Information](https://opensource.org/licenses/MPL-2.0)`;
      break;

  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  `
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
}

module.exports = generateMarkdown;