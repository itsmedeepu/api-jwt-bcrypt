const jwt = require("jsonwebtoken");
const Auth = async (req, res, next) => {
  let auth_token = req.header("auth-token");
  if (!auth_token) return res.status(401).send("auth token not found");
  //verify token
  try {
    jwt.verify(auth_token, process.env.SECRET_KEY);
    req.user = "verified";
    next();
  } catch (err) {
    res.status(400).send("Access forbidden");
  }
};

module.exports = Auth;
