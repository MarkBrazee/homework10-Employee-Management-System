
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

  FOREIGN KEY (roleTitle) REFERENCES role.Title
  -- FOREIGN KEY (salary) REFERENCES salary
  FOREIGN KEY (deptId) REFERENCES deparment.id

);


CREATE TABLE employee (
  
  id INT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  roleId INT NOT NULL,
  mgrId INT NOT NULL,
  PRIMARY KEY (id)

  FOREIGN KEY (firstName) REFERENCES department.name
  -- FOREIGN KEY (lastName) REFERENCES last.name
  FOREIGN KEY (roleId) REFERENCES role.id
  -- FOREIGN KEY (mgrId) REFERENCES mgr.id

);

INSERT INTO department (id, name)
VALUES (10, "Al")

INSERT INTO department (id, name)
VALUES (20, "Bob")

INSERT INTO department (id, name)
VALUES (30, "Cathy")

INSERT INTO department (id, name)
VALUES (40, "Danielle")

INSERT INTO role (id, roleTitle, salary, deptId)
VALUES (10, "Engineer", 60000, 3 )

INSERT INTO role (id, roleTitle, salary, deptId)
VALUES (10, "Intern", 30000, 3)

INSERT INTO role (id, roleTitle, salary, deptId)
VALUES (30, "Manager", 100000, 3)

INSERT INTO role (id, roleTitle, salary, deptId)
VALUES (40, "Engineer", 60000, 3)

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (10, "Al", "Anderson", 2, 2)

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (20, "Bob", "Baker", 3, 1)

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (30, "Cathy", "Canada", 1, 1)

INSERT INTO employee (id, firstName, lastName, roleId, mgrId)
VALUES (40, "Danielle", "Douglas", 2, 1)
