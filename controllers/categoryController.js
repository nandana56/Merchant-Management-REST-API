const Category = require("../models/Category");

const addCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
    });

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addCategory,
};