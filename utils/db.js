const mongoose = require("mongoose");

const mongo = () => {
  return mongoose
    .connect(
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      process.env.DB_URL
    )
    .then(() => console.log("connection successfull"))
    .catch((err) => err.message);
};

module.exports = mongo;
