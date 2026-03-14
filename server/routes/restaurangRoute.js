const express = require("express");
const Restaurant = require("../models/restaurang");

const router = express.Router();

// GET alla restauranger
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
});

module.exports = router;