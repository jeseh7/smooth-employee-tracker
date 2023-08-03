DROP DATABASE IF EXISTS classlist_db;
CREATE DATABASE classlist_db;

USE classlist_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY,
  title: VARCHAR(30) NOT NULL,
  salary: DECIMAL(5,2) NOT NULL,
  department_id: INT NOT NULL
);

CREATE TABLE employee (
  id: INT NOT NULL PRIMARY KEY,
  first_name: VARCHAR(30) NOT NULL,
  last_name: VARCHAR(30) NOT NULL,
  role_id: INT NOT NULL,
  manager_id: INT
)