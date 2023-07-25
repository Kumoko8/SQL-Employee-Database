DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary decimal NOT NULL,
  department_id INT NOT NULL FOREIGN KEY REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL FOREIGN KEY REFERENCES role(id),
  manager_id INT NOT NULL FOREIGN KEY REFERENCES employee(id)
);
