# Dynamic-Alert-Buttons-with-Props-

npx create-react-app alert-buttons-assignment
cd alert-buttons-assignment
npm start

How to Run the Application

To run the Dynamic Alert Buttons application on your local machine, follow these detailed instructions:

Prerequisites
Ensure that Node.js and npm are installed:

Node.js can be downloaded and installed from the official Node.js website.
npm is included as part of the Node.js installation.
Setup Instructions
Clone the Repository:
If a repository URL is provided, use git clone followed by the URL to clone the repository.
If not, ensure you have the project files on your local machine.
Navigate to the Project Directory:
Open a terminal and change into the project directory.
Install Dependencies:
Run npm install to install the necessary dependencies for the React application.
Start the Application:
Execute npm start in the terminal. This will compile the application and open it in your default web browser.
Alternatively, the application can be accessed by navigating to http://localhost:3000 in a web browser.
Component Details

Toolbar Component
This component serves as a container for rendering the AlertButton components.
It dynamically creates buttons based on an array of properties (each containing message and children data).
AlertButton Component
Receives message and children as props.
Each button is configured to display an alert with the message when clicked.
The children prop is used to set the display text of the button.
