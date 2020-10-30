const department = require("./department.csv");
const role = require("./role.csv");
const employee = require("./employee.csv");

DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;


Use employee_db;


CREATE TABLE department (
  
  id INT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);


CREATE TABLE role (
  
  id INT NOT NULL,
  roleTitle VARCHAR(30),
  salary DECIMAL(10,2),
  deptId INT NOT NULL,
  PRIMARY KEY (id)


);


CREATE TABLE employee (
  
  id INT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  roleId INT NOT NULL,
  mgrId INT NOT NULL,
  PRIMARY KEY (id)


);






