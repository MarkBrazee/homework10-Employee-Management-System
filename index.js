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
        // create 
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

const inquirer = require("inquirer");
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
    database: "employee_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  
  function afterConnection() {
    init()
    
  }

// Write code to use inquirer to ask questions 
    // What would you like to do?
        // View departments, roles and employees
        // Add departments, roles and employees
        // Update employee roles
//=================================================



const questions = [ {

    type: "list",
    message: "What do you want to do?",
    name: "program",
    choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by role",
        "Add employee",
        "Add employee by department",
        "Add employee role",
        "Update employee",
    ]
}];

function init() {
    inquirer.prompt(questions)
    .then(({
        program
    }) => {

        console.log(program)

        switch (program) {
            case "View all employees":
                viewAllEmployees()
                break;
            case "View all employees by department":
                viewEmployeesDept()
                break;
            case "View all employees by role":
                viewEmployeesRole()
                break;
            case "Add employee":
                viewAddEmployee()
                break;
            case "Add employee by department":
                viewAddEmployeeDept()
                break;
            case "Add employee role":
                viewAddEmployee()
                break; 
            case "Update employee":
                viewAddEmployee()
                break;
        };
    });
};

function viewAllEmployees() {
connection.query("SELECT * FROM employee", 
    function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
    });
}

function viewEmployeesDept() {
connection.query("SELECT department.name FROM department", 
    function(err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
    });    
}

