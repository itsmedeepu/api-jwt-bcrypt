require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const userRoutes = require("./routes/userRoutes");

app.use(cors({}));

//database connection
require("./db/conn");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});
