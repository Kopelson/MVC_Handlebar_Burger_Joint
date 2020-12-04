# MVC Handlebar Burger Joint


## Description
MVC Handlebar Burger Joint is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the burger list also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page to the devoured list. The app will store every burger in a database, whether devoured or not.

## Table of Contents

* [Overview](#overview)
* [Installation](#installation)
* [MVC](#mvc)
* [Credits](#credits)


## Overview
This is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. This project follows the MVC (model, view, controller) design pattern. Models that frame MySQL queries to grab data out of the database. The controller uses a Node Express server to handle each route to and from the user and database. Views uses Handlebars to generate the HTML. 

Project Link: https://rocky-sierra-82131.herokuapp.com/

![overview](https://user-images.githubusercontent.com/57735283/101191012-fe120280-360d-11eb-898b-06d4c5ba8b8e.PNG)

## Installation
How do you install this on in your own enviorment? Here are some guidelines:

* Clone the repository to your own device

* Run schema.sql file located in db folder in MySQL Workbench
  -Note: to have some starter burgers also run the seeds.sql file aswell
  
* Add your own password to the connection.js file located in config folder
  **IMPORTANT** this is a critical step to connect to your database
  
* In you terminal of choice install the necessary dependencies that are located in the package.json

* Start the server either through "nmp start" or "node server.js" command

* Navigate to the  http://localhost:" + PORT that is specified

* Enjoy the burger logger on your own machine!

## MVC

## Credits
* Trilogy Education Services for project setup

## Badges
<a href="https://img.shields.io/badge/CSS-10.6%25-purple"><img alt="CSS Usage" src="https://img.shields.io/badge/CSS-10.6%25-purple"></a> <a href="https://img.shields.io/badge/Handlebars-26.2%25-orange"><img alt="Handlebars usage" src="https://img.shields.io/badge/Handlebars-22.6%25-orange"></a> <a href="https://img.shields.io/badge/JavaScript-63.2%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-63.2%25-yellow"></a> <a href="https://img.shields.io/badge/Frameworks-Bootstrap-blue"><img alt="Bootstrap framework" src="https://img.shields.io/badge/Frameworks-Bootstrap-blue"></a> <a href="https://img.shields.io/badge/Frameworks-jQuery-blue"><img alt="jQuery framework" src="https://img.shields.io/badge/Frameworks-jQuery-blue"></a> <a href="https://img.shields.io/badge/Backend-Node.js-green"><img alt="Node.js" src="https://img.shields.io/badge/Backend-Node.js-green"></a> <a href="https://img.shields.io/badge/Backend-Express.js-green"><img alt="Express.js" src="https://img.shields.io/badge/Backend-Express.js-green"></a> <a href="https://img.shields.io/badge/Database-MySQL-yellow"><img alt="database used MySQL" src="https://img.shields.io/badge/Database-MySQL-yellow"></a> <a href="https://img.shields.io/badge/Deployment-Heroku-purple"><img alt="deployed using Heroku" src="https://img.shields.io/badge/Deployment-Heroku-purple"></a>
