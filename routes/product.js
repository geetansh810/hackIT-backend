var express = require("express");
var router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const {
  getProductById,
  createProduct,
  getProduct,
  getProductPhoto,
  getAllProducts,
  getAllContests,
  getAllContestsIcons
} = require("../controllers/product");

//params
router.param("userId", getUserById);
router.param("productId", getProductById);

//create routes
router.post(
  "/placement/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

//read routes
router.get("/product/:productId", getProduct);
router.get("/placements/pdf/:productId", getProductPhoto);

//listing route
router.get("/placements", getAllProducts);

router.get("/contests",getAllContests);
router.get("/contests/icons",getAllContestsIcons);


module.exports = router;
