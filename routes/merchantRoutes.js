const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createMerchant,
  getAllMerchants,
  getMerchantById,
  updateMerchant,
  deleteMerchant,
} = require("../controllers/merchantController");

router.post("/", authMiddleware, createMerchant);

router.get("/", authMiddleware, getAllMerchants);

router.get("/:id", authMiddleware, getMerchantById);

router.patch(
  "/edit/:id",
  authMiddleware,
  updateMerchant
);

router.delete(
  "/:id",
  authMiddleware,
  deleteMerchant
);

module.exports = router;