# Boomers
# Client-Server JavaScript Application

This project contains a client-side application (built with HTML, CSS, and Vanilla JavaScript) and a server-side application (built with Node.js and MSSQL). The client-side application includes a responsive form with CSS validation, while the server-side application handles form submissions by storing the data in a MSSQL database.

## Client-Side Application

### Features

- Responsive form layout with CSS Flexbox.
- Form validation using Vanilla JavaScript.
- added design error and  ssuccess layout while validating the forms.
- Interactive UI with user-friendly error messages.
-  Beautiful User interface

### Usage

1. Open the `client-side/index.html` file in a web browser.
2. Fill out the form fields and click the GetStarted button.
3. If there are any validation errors, they will be displayed.
4. Upon successful submission, the data will be sent to the server.
5. once data is send show a response in the alert coming from server.

## Server-Side Application

### Features

- Node.js server using Express for handling HTTP requests.
- Connection to MSSQL database to store form data.
- Uses `mssql` library for database operations.

### Usage

1. Install the required packages by running `npm install` in the `server-side` directory.
2. Configure the MSSQL connection in `server-side/DataBaseConnection.js`.
3. Start the server by running `node server.js` in the `server-side` directory.

## Setting up MSSQL Database

1. Create a database in your MSSQL server.
2. Update the database connection details in `server-side/DataBaseConnection.js`.

## Dependencies

- Express.js
- mssql
- cors


## Disclaimer
- Backer Server is on render so it will take some time to response



