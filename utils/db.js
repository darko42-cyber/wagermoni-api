const mongoose = require("mongoose");

mongoose.connect(
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  process.env.DB_URL
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongodb connection successfull");
});
connection.on("error", (err) => {
  console.log(`Mongodb connection failed ${err}`);
});

module.exports = connection;
