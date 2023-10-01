const mongoose = require("mongoose");

const bookingDetailsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    vehicleRegistered: { type: String, required: true },
    paymentStatus: { type: String, default: "No" },
});

const slotSchema = new mongoose.Schema(
    {
        date: { type: Date, required: true },
        booking_details: [bookingDetailsSchema], // Array of booking_details
        slotsLeft: { type: Number, default: 10 },
    },
    {
        collection: "Slot_Booking",
    }
);

module.exports = mongoose.model("Slot_Booking", slotSchema);
