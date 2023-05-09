// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of the project you are working on',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your application',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to utilize your application/website',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please select the license that you would like to add to your project',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        message: 'Please enter the list of credits and/or references used throughout the course of your project',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Please provide testing instructions for your project',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
];
  
// TODO: Create a function to write README file
function generateREADME(data) {
    const readmeContent = generateMarkdown(data);
    fs.writeFile('SampleREADME.md', readmeContent, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('README file has been succesfully created!');
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        generateREADME(answers);
    });
}

// Function call to initialize app
init();

