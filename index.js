const express = require("express");
const cors = require("cors");
const cookieParse = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cors({ origin: "https://wagermoni.onrender.com", credentials: true }));
app.use(cookieParse());
require("dotenv").config();

// const usersRoute = require("./routes/usersRoute");
const predictionsRoute = require("./routes/predictions");
const usersRoute = require("./routes/usersRoute");
const commentsRoute = require("./routes/comments");
const likesRoute = require("./routes/likes");
const oddsEventRoute = require("./routes/oddsEvent");
const dbConfig = require("./utils/db");
dbConfig();

// app.use("/api/users", usersRoute);
app.use("/api/predictions", predictionsRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/users", usersRoute);
app.use("/api/likes", likesRoute);
app.use("/api/events", oddsEventRoute);

app.listen(process.env.PORT, (res) => {
  console.log("Server is listening on port 5000");
});
