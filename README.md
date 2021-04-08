# MVC Handlebar Burger Joint :

This restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the burger list also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page to the devoured list. The app will store every burger in a database, whether devoured or not.

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

 ### Models
 These models fill in the necessary data that will send to the homemade ORM that will query the database that follows the CRUD concepts
 
  #### Create
    insertOne function - inserts a new burger in the database.
  #### Read
    selectAll function - selects all burgers in the database.
  #### Update
    updateOne function- changes a burger that has not be devoured to devoured.
  #### Delete
    deleteOne function- deletes a burger by ID.
 
 ### Views
 
  #### Handlebars
    Using handlebars handle the server side html rendering by hydrating with data from the controller
  #### jQuery
    jQuery adds click handlers that sends ajax requests using "put" and "delete" methods
    
 ### Controllers
 The controller handles the different routes the user actions and handlebars are request that follow CRUD concepts
 
#### Read
    router.get "/" - This route hydrates handlebars with data by grabbing all the burger info from the database through a get request
#### Create
    router.post "/api/burgers" - This route handles a form request that wants add a new burger to the database through a post request
#### Update
    router.put "/api/burgers/:id" - this route wants to update a burger in the database through a put request by using ID
#### Delete
    router.delete "/api/burgers/:id" - this route wants to delete a burger from a database through a delete request by using ID

## Credits
* Trilogy Education Services for project setup

## Badges
<a href="https://img.shields.io/badge/CSS-10.6%25-purple"><img alt="CSS Usage" src="https://img.shields.io/badge/CSS-10.6%25-purple"></a> <a href="https://img.shields.io/badge/Handlebars-26.2%25-orange"><img alt="Handlebars usage" src="https://img.shields.io/badge/Handlebars-22.6%25-orange"></a> <a href="https://img.shields.io/badge/JavaScript-63.2%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-63.2%25-yellow"></a> <a href="https://img.shields.io/badge/Frameworks-Bootstrap-blue"><img alt="Bootstrap framework" src="https://img.shields.io/badge/Frameworks-Bootstrap-blue"></a> <a href="https://img.shields.io/badge/Frameworks-jQuery-blue"><img alt="jQuery framework" src="https://img.shields.io/badge/Frameworks-jQuery-blue"></a> <a href="https://img.shields.io/badge/Backend-Node.js-green"><img alt="Node.js" src="https://img.shields.io/badge/Backend-Node.js-green"></a> <a href="https://img.shields.io/badge/Backend-Express.js-green"><img alt="Express.js" src="https://img.shields.io/badge/Backend-Express.js-green"></a> <a href="https://img.shields.io/badge/Database-MySQL-yellow"><img alt="database used MySQL" src="https://img.shields.io/badge/Database-MySQL-yellow"></a> <a href="https://img.shields.io/badge/Deployment-Heroku-purple"><img alt="deployed using Heroku" src="https://img.shields.io/badge/Deployment-Heroku-purple"></a>
