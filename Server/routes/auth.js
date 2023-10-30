// third party modules for node js
const express = require("express");
const router = express.Router();

const { getAllData, postAllData } = require("../Controllers/auth");

// this is get api for getting all the data from database
router.get("/", getAllData);
// this is post api for posting all the data into database
router.post("/userdata", postAllData);

module.exports = router;
