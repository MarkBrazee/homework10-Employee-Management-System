
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;


Use employee_db;


CREATE TABLE department (
  
  deptId INT NOT NULL,
  
  name VARCHAR(30),
  PRIMARY KEY (deptId)
);


CREATE TABLE role (
  
  roleId INT NOT NULL,
  
  roleTitle VARCHAR(30),
  
  salary DECIMAL(10,2),
  deptId INT NOT NULL,
  PRIMARY KEY (roleId)
);


CREATE TABLE employee (
  
  employeeId INT NOT NULL,
  
  firstName VARCHAR(30),
  
  lastName VARCHAR(30),
  
  roleId INT NOT NULL,
  
  mgrId INT NOT NULL,
  PRIMARY KEY (employeeId)
);
