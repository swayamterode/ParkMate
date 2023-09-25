const express = require("express");
const router = express.Router();
const Slot = require("../models/SlotBooking");

const formatDate = (dateTime) => new Date(dateTime).toISOString();

// Get slot information for a specific date
router.get("/", async (req, res) => {
  const { date } = req.query;

  try {
    const formattedDate = formatDate(date);

    // Check if a slot for the specified date exists
    const slot = await Slot.findOne({ date: formattedDate });

    if (!slot) {
      return res.json({ message: "10 slots" });
    }

    // Return slotsLeft specifically
    return res.json({
      message: "Slot information retrieved",
      //   ObjectId: slot._id,
      slotsLeft: slot.slotsLeft,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving slot information",
      error: error.message,
    });
  }
});

module.exports = router;
