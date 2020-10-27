//Psuedo Code
    // Create js file for Inquirer and comnection functions.
        // require Inquirer and fs
        // require mysql

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

const inquirer = require("inquirer")
const fs = require("fs");
        

var mysql = require("mysql");




var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "2005*alyKat",
    database: "ice_creamDB"
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