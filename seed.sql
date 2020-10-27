-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "favorite_db" database --
CREATE DATABASE employee_db;

-- Make it so all of the following code will affect favorite_db --
Use employee_db;

-- Creates the table "department" --
CREATE TABLE department (
  --Make id- INT PRIMARY KEY --
  deptId INT NOT NULL,
  -- Make name- VARCHAR(30) --
  name VARCHAR(30),
  PRIMARY KEY (deptId)
);

-- Creates the table "role" --
CREATE TABLE role (
  --Make id- INT PRIMARY KEY --
  roleId INT NOT NULL,
  -- Make title- VARCHAR(30) --
  roleTitle VARCHAR(30),
  -- Make salary- INT --
  salary INT(10),
  deptId INT NOT NULL,
  PRIMARY KEY (roleId)
);

-- Creates the table "employee" --
CREATE TABLE employee (
  --Make id- INT PRIMARY KEY --
  employeeId INT NOT NULL,
  -- Make first name- VARCHAR(30) --
  firstName VARCHAR(30),
  -- Make last name- VARCHAR(30) --
  lastName VARCHAR(30),
  -- Make role id- INT --
  roleId INT NOT NULL,
  -- Make manager id- INT --
  mgrId INT NOT NULL,
  PRIMARY KEY (employeeId)
);
