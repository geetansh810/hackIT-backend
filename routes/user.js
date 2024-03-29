var express = require("express");
var router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const {
  getUserById,
  getUser,
  updateUser,
  getUserResume
} = require("../controllers/user");

//middleware t0 get user details by user ID
router.param("userId", getUserById);

//get user details
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get("/user/resume/:userId", isSignedIn, isAuthenticated, getUserResume);

// router.get("/users", getUsers);

module.exports = router;
