const inquirer = require('inquirer');
const fs = require('fs');

// Import functions from generateMarkdown.js
const {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
  } = require('./generateMarkdown'); 
  

// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Enter your email address:',
    },
  ];
  

// Function to generate the README content
function generateReadme(userResponses) {
  const licenseBadge = renderLicenseBadge(userResponses.license);
  const licenseSection = renderLicenseSection(userResponses.license);

  return `# ${userResponses.projectTitle}

${licenseBadge}

## Description
${userResponses.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseBadge ? '- [License](#license)\n' : ''} 
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${userResponses.installation}

## Usage
${userResponses.usage}

${licenseSection}

## Contributing
${userResponses.contributing}

## Tests
${userResponses.tests}

## Questions
For additional questions, you can reach out to me via GitHub:
[${userResponses.githubUsername}](https://github.com/${userResponses.githubUsername})

Or you can email me at: ${userResponses.emailAddress}
`;
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README file (${fileName}) generated successfully!`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((userResponses) => {
    const readmeContent = generateReadme(userResponses);
    writeToFile('README.md', readmeContent);
  });
}

// Initialize app
init();
