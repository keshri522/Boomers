// this is controllers file that will return all the function to routes

const DatabConnection = require("../DataBaseConnection");
// this is get api to get all the data from the database
const getAllData = async (req, res) => {
  try {
    let data = "SELECT * FROM user";
    let result = await DatabConnection.query(data, (err, result) => {
      if (err) {
        // console.log(err); // just for debugging
        res.status(400).send(err);
      } else {
        // console.log(result); // just for debugging
        res.status(200).send(result);
      }
    });
  } catch (error) {
    // console.log(error); // just for debugging
    res.status(400).send(error);
  }
};

// this post api to post all the data like user details to databse mysql
const postAllData = async (req, res) => {
  const data = req.body;
  console.log(data); // just for debugging

  try {
    DatabConnection.query("INSERT INTO user SET ?", data, (error, result) => {
      if (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send(error);
        return;
      } else {
        res.status(200).json({
          result: result,
          data: data,
        });
      }
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).send(error);
  }
};

module.exports = { postAllData, getAllData };
