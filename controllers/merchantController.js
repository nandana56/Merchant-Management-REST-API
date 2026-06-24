const Merchant = require("../models/Merchant");

const createMerchant = async (req, res) => {
  try {
    const merchant = await Merchant.create(req.body);

    res.status(201).json({
      success: true,
      data: merchant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.find().populate("category");

    res.status(200).json({
      success: true,
      data: merchants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMerchantById = async (req, res) => {
  try {
    const merchant = await Merchant.findById(req.params.id).populate(
      "category"
    );

    if (!merchant) {
      return res.status(404).json({
        message: "Merchant not found",
      });
    }

    res.status(200).json({
      success: true,
      data: merchant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateMerchant = async (req, res) => {
  try {
    const merchant = await Merchant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: merchant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteMerchant = async (req, res) => {
  try {
    await Merchant.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Merchant Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMerchant,
  getAllMerchants,
  getMerchantById,
  updateMerchant,
  deleteMerchant,
};