const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://dipanshhchauhan:0YLVboWumwrsMjRH@cluster0.nf0redb.mongodb.net/?retryWrites=true&w=majority",{

    }).then((data) => {
      console.log(`Connected to MongoDB: ${data.connection.host}`);
    });
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;

