const express = require("express");
const spaTreatment = require("../models/spaTreatment");

const router = express.Router();

// GET ALL TREATMENTS
router.get("/", async (req, res) => {
  try {
    const treatments = await spaTreatment.find({});
    res.json({ treatments });
  } catch (err) {
    res.status(500).json({ message: "Kunde inte hämta behandlingar" });
  }
});

module.exports = router;