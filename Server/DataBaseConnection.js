// creating connection with my sql database
const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
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
