// creating connection with my sql database
const mysql = require("mysql");
const dotenv = require("dotenv").config();
const con = mysql.createConnection({
  // to provide more robust or security using  enivorment files
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
// creating connection
con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected Sucessfully:");
  }
});

module.exports = con;
