const mongoose = require("mongoose");

const spaTreatmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String },          
    forTwo: { type: Boolean, default: false }, // true om duo-behandling
    price: { type: Number, required: true },
    duration: { type: String },       
    description: { type: String },
    imageUrl: { type: String }         
  },
  { timestamps: true }
);

const spaTreatment = mongoose.model("spaTreatment", spaTreatmentSchema, "spaTreatment");

module.exports = spaTreatment;