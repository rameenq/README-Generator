function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Apache 2.0') {
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    }
    // Add more license options and badge URLs if needed
    return ''; // Return an empty string if no license
  }

  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
    }
    // Add more license options and links if needed
    return ''; // Return an empty string if no license
  }

  function renderLicenseSection(license) {
    if (license) {
      return `
  ## License
  
  This project is licensed under the terms of the ${license} license. See the [LICENSE](LICENSE) file for more details.
  
  ${renderLicenseBadge(license)}
  `;
    }
    return ''; // Return an empty string if no license
  }

  function generateMarkdown(data) {
    return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license) ? '- [License](#license)\n' : ''}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, you can reach out to me via GitHub:
  [${data.githubUsername}](https://github.com/${data.githubUsername})
  
  Or you can email me at: ${data.emailAddress}
  `;
  }

  module.exports = {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    generateMarkdown,
  };

  
  