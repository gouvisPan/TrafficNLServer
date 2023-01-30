# TrafficNLServer

## Description 
A server application for the trafficNL app ( https://github.com/gouvisPan/TrafficNLClient ). The app fetches traffic data from the ANWB api -in a 5 minute interval-  and stores it in a database. Basic Routing and a simple API is also integraded for accepting request 

## Features
- Server requests traffic data in a 5 minute interval
- Server stores data in MongoDB
- Api implementation for basic fetching requests

## Api routes
- Fetch latest data: /api/v1/events/latest
- Fetch all data: /api/v1/events/all
- Fetch specific data: /api/v1/events/specific/:date

## Technologies and Tools used
- Javascript  
- NodeJS, Express and MongoDB (Mongoose)
- Axios for external api calls 

## How to install
### NodeJS is a prerequisite, install latest NodeJS here : https://nodejs.org/en/download/

### Instructions
1) Clone git repo: git clone https://github.com/gouvisPan/TrafficNLServer.git

2) Go to the project directory: cd project-directory

3) Install dependencies: npm install
 
4) Start the backend server: npm start


