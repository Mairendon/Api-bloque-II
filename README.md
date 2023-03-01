# Project Support
### Introduction
Project Support is an open source platform that enable users share causes they're passionate about and actively involved with with the hopes of connecting with other users equally interested in working with them on the given cause.
### Project Support Features
* Users can signup and login to their accounts
* Public (non-authenticated) users can access all causes on the platform
* Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created.
### Installation Guide
* Clone this repository [here](https://github.com/blackdevelopa/ProjectSupport.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 7066.
### API Endpoints: Clinica
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/clinicas | To create a new clinica |
| POST | /api/clinicas/:id | To update clinica |
| GET | /api/clinicas | To retrieve all clinicas on the platform |
| GET | /api/clinicas/:Id | To retrieve details of a single clinica |
| DELETE | /api/clinicas/:id | To delete a single clinica |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [bcrypt]
* [helmet]
* [jsonwebtoken]
* [morgan]
* [pg]
* [pg-hstore]
* [sequelize]
* [cors]
* [DBeaver](https://www.dbeaver.io/) Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases.


### Authors
* [Moni Maraver](https://github.com/MoniMaraver)
* [Mairen Rendón](https://github.com/Mairendon)

### License
This project is available for use under the MIT License.
