//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// const axios = require('axios');

const Manager = require("./data/Manager");
const Engineer = require("./data/Engineer");
const Intern = require("./data/Intern");

// Pmopt user for team name
const managerInfo = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'team',
      message: 'What is the name of your team?',
      },
      {
        type: 'input',
        name: 'managerName',
        message: 'Please enter full name of the manager?',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Please enter employee id for the manager?',
      },     
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter email address for the manager?',
      },
         
      {
        type: 'input',
        name: 'managerPhone',
        message: 'Please enter phone number for the manager?',
        },   
  ]);
// Questions to be prompted to the user
const employeeInfo = () =>
  inquirer.prompt([
    {
        type: "list",
        message: "Who would you like to add to the team?",
        choices: ["Engineer", "Intern"],
        name: "role",
    },
      {
      type: 'input',
      name: 'name',
      message: 'Please enter full name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter employee id?',
        },   
    {
      type: 'input',
      name: 'email',
      message: 'Please enter email address?',
    },
    
      {
        type: "input",
        message: "What is your engineer's GitHub user-name?",
        when: (employeeAnswers) => employeeAnswers.role === "Engineer",
        name: "github",
    },
    {
        type: "input",
        message: "Which university is your Intern attending?",
        when: (employeeAnswers) => employeeAnswers.role === "Intern",
        name: "school",
    },
    {  type: "confirm",
        message: "Would you like to add another employee to the team?",
        name: "addMember"
    },  
    
  ]);

  // Obtain github user info using external API
async function getUserinfo(user) {
    
    try {
        const response = await axios      
      
        .get(`https://api.github.com/users/${user}`);
      return response.data;
    

      } catch (error) {
        console.log(error);
      }
  }

// async function to initialize app
async function init() {
  console.log("Ready to create your Software Engineering Team Profile!!");
// calling functions to get user respomses and github info
  try {
      const managerAnswers = await managerInfo();       
      const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerPhone); 
      console.log('Manager Answers: ', managerAnswers) 
      console.log('*********************************************************'); 
      console.log("Now lets enter employee information");
      let addEmployee = true; 
      do {
          const employeeAnswers = await employeeInfo();
          console.log(employeeAnswers.addMember); 
          addEmployee = employeeAnswers.addMember
          if (employeeAnswers.role === 'Engineer') {
              const engineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.github);
          }
          else {
              const Intern = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.school);
          }
      } while (addEmployee); 
      
    //   const manager = new Manager(managerAnswers.name, id, managerAnswers.email, officeNumber)
//     const gitInfo = await getUserinfo(answers.githubUserName);   
//     const avatar = gitInfo.avatar_url;     
//     // calling function to generate and readme content and create file
//     const readMe = generateMarkdown(answers, avatar);    
//    const readMeFile =  await fs.writeFileSync("GeneratedREADME.md", readMe);
//    console.log("README file is successfully created!");
    
}catch(err) {
    console.log(err);    
}

};
// Function call to initialize app
init();
