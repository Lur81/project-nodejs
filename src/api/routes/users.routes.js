const express = require("express");
const {isAdmin, isAuth} = require('../../middlewares/auth');

const {
  login,
  register,
  logout,
  checkSession,
  deleteUser,
  getUser
} = require("../controllers/users.controllers");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", [isAuth], logout);
router.post("/checksession", [isAuth], checkSession);
router.delete("/:id", [isAdmin], deleteUser);
router.get("/", [isAdmin], getUser);

module.exports = router;
