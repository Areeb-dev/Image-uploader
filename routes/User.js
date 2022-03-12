const express = require("express");
const router = express.Router();
const { signUp, getAllUsers } = require("../controllers/User");

const { uploadImage } = require("../utils/multer");

router.post("/users", uploadImage().single("media"), signUp);

router.get("/users", getAllUsers);

module.exports = router;
