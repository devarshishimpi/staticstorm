require("dotenv").config();

const mongoose = require("mongoose");

const mongoURI = process.env.mongoURI;

const connectToMongo = () => {
  mongoose.connect(mongoURI, { dbName: "staticstorm" }, () => {
    console.log("Connected To Mongo Successfully!!");
  });
};

module.exports = connectToMongo;
