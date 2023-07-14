const express = require("express");
const router = express.Router();
const { login, register, Dashboard } = require("../controllers/UserController");
//require middlewares
const Auth = require("../middleware/UserMiddleware");

router.post("/login", login);
router.post("/register", register);

router.get("/dashboard", Auth, Dashboard);
module.exports = router;
