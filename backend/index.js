const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Users = require("./routes/api/users");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/users",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("db connected");
    }
  }
);

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/verify", Users);

app.listen(4000, () => {
  console.log("server started at port no 4000");
});
