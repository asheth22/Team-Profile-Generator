//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateManager = require("./src/manager");
const generateIntern = require("./src/intern");
const generateEngineer = require("./src/engineer");
const generateMain = require('./src/main');
let allCards;
let firstEmp = true;
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
    {
      type: "confirm",
      message: "Would you like to add another employee to the team?",
      name: "addMember"
    },

  ]);

function createManagerCard(manager) {
  // const managerCard = fs.writeFileSync("./lib/manager.html", "utf8");
}

// async function to initialize app
async function init() {
  console.log("Ready to create your Team Profile!!");
  // calling functions to get user respomses and github info
  try {
    const managerAnswers = await managerInfo();
    const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerPhone);
    console.log('Manager Answers: ', managerAnswers)
    const teamName = managerAnswers.team;
    const managerCard = generateManager(managerAnswers);
   
    console.log('*********************************************************');
    console.log("Now lets enter employee information");
    let addEmployee = true;
    do {
      const employeeAnswers = await employeeInfo();
      console.log(employeeAnswers.addMember);
      addEmployee = employeeAnswers.addMember
      console.log('addEmploye', addEmployee);
      if (employeeAnswers.role === 'Engineer') {
        const engineerCard = generateEngineer(employeeAnswers);
        console.log(engineerCard);
        if (firstEmp) {
          console.log('first empl is true');
          allCards = engineerCard;
          firstEmp = false;
        }
        else {
          allCards += engineerCard;
        }

      }
      else {
        const internCard = generateIntern(employeeAnswers);
        console.log(internCard);

        if (firstEmp) {
          allCards = internCard;
          firstEmp = false;
        }
        else {
          allCards += internCard;
        }
      }

    } while (addEmployee);

   
    const htmlFile = generateMain(managerCard, allCards, teamName);
    console.log(htmlFile);
    const outputFile = await fs.writeFileSync("output.html", htmlFile);
    console.log("HTML file is successfully created!");    

  } catch (err) {
    console.log(err);
  }

};
// Function call to initialize app
init();
