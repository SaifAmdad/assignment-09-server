const mongoose = require("mongoose");
const { mongodbUrl } = require("../secrets");

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log("DB connected successfully");
  } catch (error) {
    res.json(error);
  }
};
module.exports = connectDB;
