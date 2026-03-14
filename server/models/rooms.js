const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  imageurls: [String],

  features: [String]

}, {
  timestamps: true
})

const roomModel = mongoose.model("rooms", roomSchema)

module.exports = roomModel