// creating a server using express;
const express = require("express");
const app = express();
const mysql = require("mysql");
const DatabConnection = require("./DataBaseConnection"); // this is the connection with sql
const cors = require("cors");
// middleWare to parese the data  coming from body
app.use(express.json());
app.use(cors());
// routes
// app.get("/", (req, res) => {
//   let data = "SELECT * FROM formdata";
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
// creating a post routes to  post the  data into sql database
app.post("/userdata", (req, res) => {
  const data = req.body;
  //   console.log(data);
  DatabConnection.query("INSERT INTO formdata Set ?", data, (error, result) => {
    if (error) {
      //   console.log(error);
      res.status(500).send(error);
      return;
    } else {
      //   console.log(data);
      res.status(200).json({
        result: result,
        data: data,
      });
    }
  });
});
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running at port${port}`);
});
