const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI)
  .then((e) => {
    console.log("database connected sucessfully");
  })
  .catch((err) => {
    console.log("something went bad at server");
  });
