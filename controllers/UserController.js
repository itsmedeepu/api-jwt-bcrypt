const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { reset } = require("nodemon");

const login = async (req, res) => {
  try {
    const userget = await User.findOne({ email: req.body.email });
    const check = await bcrypt.compare(req.body.password, userget.password);
    if (check) {
      var token = jwt.sign({ _id: userget._id }, process.env.SECRET_KEY);
      res.header("auth-token", token);

      res.status(200).json({
        auth_token: token,
      });
      //   res.redirect("dashboard");
    } else {
      res.status(200).send("invalid login details");
    }
  } catch (err) {
    console.log("something went bad at server");
  }
};

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    // await user.findOne({ email: req.body.email }).then((data) => {
    //   if (data) {
    //     res.staus(200).send("user already registered");
    //     return;
    //   }
    await user
      .save()
      .then((data) => {
        res.status(200).send("user registered sucessfully");
      })
      .catch((err) => {
        res.status(503).send("user not regsitred");
      });
  } catch (err) {
    res.status(503).send("something went bad at server");
  }
};

const Dashboard = (req, res) => {
  res.send("Welcome Dashboard");
};
module.exports = {
  login,
  register,
  Dashboard,
};
