const express = require("express");
const router = express.Router();
const Slot = require("../models/SlotBooking"); //schema

const formatDate = (date) => new Date(date).toISOString();

router.post("/", async (req, res) => {
  const {
    username,
    email,
    location,
    date,
    startTime,
    endTime,
    vehicleRegistered,
  } = req.body;

  try {
    const formattedDate = formatDate(date);

    // Check if a slot for the specified date exists, if not, create one
    let slot = await Slot.findOne({ date: formattedDate });

    if (!slot) {
      slot = await Slot.create({
        date: formattedDate,
        booking_details: [],
        slotsLeft: 10, // Adjust the number of slots as needed
      });
    }

    if (slot.slotsLeft <= 0) {
      return res.json({ message: "No available slots for this date." });
    }

    const alreadyBooked = slot.booking_details.find(
      (booking) =>
        booking.username === username &&
        booking.email === email &&
        booking.location === location &&
        booking.startTime === startTime &&
        booking.endTime === endTime &&
        booking.vehicleRegistered === vehicleRegistered
    );

    if (alreadyBooked) {
      return res.json({ message: "Slot already booked." });
    }

    // Decrease slots left by 1
    slot.slotsLeft -= 1;
    await slot.save();

    const newBooking = {
      username,
      email,
      location,
      startTime,
      endTime,
      vehicleRegistered,
      paymentStatus: "No",
    };

    slot.booking_details.push(newBooking);
    await slot.save();

    return res.send({ message: "Slot Booked", newBooking });
    
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error booking slot", error: error.message });
  }
});

module.exports = router;
