const mongoose = require("mongoose");

const menuItemSchema = mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
});

const menuCategorySchema = mongoose.Schema({
  title: String,
  items: [menuItemSchema],
});

const restaurantSchema = mongoose.Schema({
  name: String,
  imageurl: String,
  description: String,
  menuCategories: [menuCategorySchema],
});

const Restaurant = mongoose.model("Restaurang", restaurantSchema, "restaurang");

module.exports = Restaurant;