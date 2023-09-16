const mongoose = require("mongoose");
const db = process.env.MONGOURI;

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://anthonyjourney:shellhacks2023@journeycluster0.zmfgivm.mongodb.net/?retryWrites=true&w=majority', {   
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;