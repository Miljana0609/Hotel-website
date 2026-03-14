const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({

  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rooms",
    required: true
  },

  name: String,
  email: String,
  guests: Number,

  checkin: Date,
  checkout: Date,

  totalPrice: Number

});

module.exports = mongoose.model("bookings", bookingSchema);