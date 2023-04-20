// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "Please enter the title of your project:",
    "Please enter a description of your project:",
    "Please provide installation instructions for your project:",
    "Please describe the usage of your project:",
    "Please list any contributors to your project:",
    "Please explain the testing methodology for your project:",
    "Please enter your GitHub username:",
    "Please enter your email address:"
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inq
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'install',
                message: questions[2],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'contributors',
                message: questions[4],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'github',
                message: questions[6],
                validate: function (input) {
                    return input.length > 0;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: questions[7],
                validate: function (input) {
                    return input.length > 0;
                }
            },
        ])
        .then((data) => {
            const fileName = `${data.title.trim().toLowerCase().split(' ').join('-')}-README.md`;
            const content = 
`# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.test}

## Questions

[My GitHub Profile](https://github.com/${data.github})

[Email me!](mailto:${data.email})`;
            writeToFile(fileName, content);
        })
}

// Function call to initialize app
init();
