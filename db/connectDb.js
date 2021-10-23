const mongoose = require("mongoose");
const { DB_URL } = require("../config/config");
const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected at port", connection.connections[0].port,"host=",connection.connections[0].host);
  } catch (err) {
    console.log(err);
  }
};
module.exports = dbConnect;
