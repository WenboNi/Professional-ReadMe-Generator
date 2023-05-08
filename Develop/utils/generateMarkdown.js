// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-green.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `\n* [License](#license)\n`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Credits/References](#Credits)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [GitHub](#Github)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  [![${data.license} License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  This project is licensed under the ${data.license} License.
  
  ## Contributing
  ${data.credits}
  
  ## Tests
  ${data.testing}
  
  ## Questions
  Should you have any questions, please reach our to me at ${data.email}.

  ## GitHub Link
  Feel free to view my other projects and repos via https://github.com/${data.github}.`
};

module.exports = generateMarkdown
