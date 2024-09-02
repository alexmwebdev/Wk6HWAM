const express = require("express");
const mongoose = require("mongoose");
const File = require("./models/file.model.js");
const fileRoute = require("./routes/file.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// routes
app.use("/", fileRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb://127.0.0.1:27017/MongoAPIDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
