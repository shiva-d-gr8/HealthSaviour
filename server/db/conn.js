const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const uri = process.env.MONGO_URI;
let client = null;

if (!uri) {
  console.warn("MONGO_URI not set — skipping MongoDB connection (server will run but DB operations will fail).");
} else {
  client = mongoose
    .connect(uri, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log("Error: ", error);
      return error;
    });
}

module.exports = client;
