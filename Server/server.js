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
// routes
// app.get("/", (req, res) => {
//   let data = "SELECT * FROM user";
//   DatabConnection.query(data, (error, results, field) => {
//     if (error) {
//       console.log(error);
//       res.status(400).send(error);
//       return;
//     } else {
//       console.log(results);
//       res.status(200).json(results);
//     }
//   });
// });
// // creating a post routes to  post the  data into sql database
// app.post("/userdata", (req, res) => {
//   const data = req.body;
//   //   console.log(data);
//   DatabConnection.query("INSERT INTO user Set ?", data, (error, result) => {
//     if (error) {
//       //   console.log(error);
//       res.status(500).send(error);
//       return;
//     } else {
//       //   console.log(data);
//       res.status(200).json({
//         result: result,
//         data: data,
//       });
//     }
//   });
// });
app.use("/", Userroutes);
// Creating the Server using the express
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at port${port}`);
});
