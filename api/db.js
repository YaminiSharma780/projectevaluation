const mongoose = require("mongoose");

var mongoURL =
  // "mongodb+srv://userid:password@cluster0.cddlpyx.mongodb.net/yourdatabase?retryWrites=true&w=majority";
  // "mongodb+srv://sharmayamini1999:yamini123@cluster0.l0myvee.mongodb.net/FoodApp?retryWrites=true&w=majority";
  "mongodb+srv://sharmayamini1999:yamini123@cluster0.l0myvee.mongodb.net/Chitrakala?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log("💚");
  console.log("MongoDB connected successfully");
});

db.on("error", () => {
  console.log("💔");
  console.log("MongoDB connection failed");
});

module.exports = mongoose;
