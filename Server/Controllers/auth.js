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
  console.log(req.body); // just for debugging
  const { data } = req.body; // destructure the data from body
  try {
    let response = await DatabConnection.query(
      "INSERT INTO user Set ?",
      data,
      (err, result) => {
        if (err) {
          //   console.log(err);
          res.status(400).send(err);
        } else {
          //   console.log(result);
          res.status(200).json({
            result: result,
            data: data,
          });
        }
      }
    );
  } catch (error) {
    // console.log(error); just for debugging
    res.status(400).send(error);
  }
};

module.exports = { postAllData, getAllData };
