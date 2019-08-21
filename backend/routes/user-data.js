const express = require("express");

const UserController = require("../controllers/user-data");

const router = express.Router();

router.get("", UserController.getUserData);

module.exports = router;
