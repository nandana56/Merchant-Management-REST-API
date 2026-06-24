const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { addCategory } = require("../controllers/categoryController");

router.post("/", authMiddleware, addCategory);

module.exports = router;