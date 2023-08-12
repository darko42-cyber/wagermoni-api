const mongoose = require("mongoose");

const mongo = async () => {
  return await mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("connection successfull"))
    .catch((err) => err.message);
};

module.exports = mongo;
