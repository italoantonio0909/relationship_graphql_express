const mongoose = require("mongoose");

const mongodb = "mongodb://localhost/example";
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection database"));
