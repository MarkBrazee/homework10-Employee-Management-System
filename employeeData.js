//Psuedo Code
    // Create js file for Inquirer and comnection functions.
        // require Inquirer and fs
        // require mysql
        // create connection to sql file
        // create gitignore file for node modules

    //Create three SQL tables 
        // Create seed.sql file
        //Department
            // id- INT PRIMARY KEY
            // name- VARCHAR(30)

        //Role
            // id- INT PRIMARY KEY
            // title- VARCHAR(30) to hold role title
            // salary- DECIMAL to hold role salary
            // department_id- INT to hold reference to department role belongs to

        //Employee
            // id- INT PRIMARY KEY
            // first_name- VARCHAR(30) to hold employee first name
            // last_name- VARCHAR(30) to hold employee last name
            // role_id- INT to hold reference to role employee has
            // manager_id- INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

    // Create a command-line application (Inquirer) for User input
    // Write code to use inquirer to gather information about the development team members,
        // create objects for each team member
        // Add departments, roles, employees
        // View departments, roles, employees
        // Update employee roles

    // Bonus:
        // Update employee managers
        // View employees by manager 
        // Delete departments, roles and employees
        // View the total utilized budget of a department -- ie the combined salaries of all employees in that department

    // Create separate file containing functions for performing specific SQL queries
        // Constructor function helpful in organization?
//==================================================

// Create js file for Inquirer and comnection functions.

const inquirer = require("inquirer")
const fs = require("fs");
        
var mysql = require("mysql");

// Connection to employeeDB
//==================================================
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "2005*alyKat",
    database: "employeeDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  
  function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  }

// Write code to use inquirer to gather information about the development team members

// Array of questions for each employee
    // Department Name
    // Department Id
    // Role Id
    // Role title
    // Role salary
    // Employee Id
    // Employee first name
    // Employee last name
    // Employee's Manager Id

    const questions = [ {

        type: "input",
        message: "What department do you work in?",
        name: "name",
        },
    {
        type: "input",
        message: "What is your department id?",
        number: "deptId",
        },
    {
        type: "input",
        message: "What is your Role Id",
        number: "roleId",
        },
    {
        message: "What is your Role Title?",
        type: 'list',
        choices: [
            "Engineer",
            "Manager",
            "Intern"
        ],
        name: "roleTitle"
    },
    {
        type: "input",
        message: "What is your Salary?",
        number: "salary",
        },
    {
        type: "input",
        message: "What is your Employee Id",
        number: "employeeId",
        },
    {
        type: "input",
        message: "What is your Employee Id",
        number: "employeeId",
        },
    {
        type: "input",
        message: "What is your first name",
        name: "firstName",
        },
        {
        type: "input",
        message: "What is your last name",
        name: "lastName",
        },
    {
        type: "input",
        message: "What is your Manager's Id number?",
        number: "mgrIdNum",
        },

];

// create object for all employees

// function to write to file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
} 


function init() {
    inquirer.prompt(questions)
    .then(({
        name,
        deptId,
        roleId,
        roleTitle,
        salary,
        employeeId,
        firstName,
        lastName,
        mgrIdNum
    }) => {

        console.log(name, deptId, roleId, roleTitle, salary, employeeId, firstName, lastName, mgrIdNum)

        switch (type) {
            case "Engineer":
                const engineer = new Engineer
                (name, deptId, roleId, roleTitle, salary, employeeId, firstName, lastName, mgrIdNum)
                break;
            case "Manager":
                const manager = new Manager
                (name, deptId, roleId, roleTitle, salary, employeeId, firstName, lastName)
                break;
            case "Intern":
                const intern = new Intern
                (name, deptId, roleId, roleTitle, salary, employeeId, firstName, lastName, mgrIdNum)
                break;
        }
    })
}

// function call to initialize program
init();
