// creating a server using express;
const express = require("express");
const app = express();
const mysql = require("mysql");
const DatabConnection = require("./DataBaseConnection"); // this is the connection with sql
const cors = require("cors");
const dotenv = require("dotenv").config();
// middleWare to parse the data  coming from body
app.use(express.json());
app.use(cors()); // for allow to send data from two diffrent origins.
const Userroutes = require("./routes/auth");

app.use("/", Userroutes);
// Creating the Server using the express
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port${port}`);
});
