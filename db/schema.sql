-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use --
CREATE DATABASE burgers_db;

-- Use the burders_db --
USE burgers_db;

-- Create the table burgers --
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(100) NOT NULL,
  devoured BOOLEAN NOT NULL default 0,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);