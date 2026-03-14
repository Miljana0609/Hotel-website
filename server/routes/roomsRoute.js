
const express = require("express");
const router = express.Router();

const Room = require("../models/rooms");
const Booking = require("../models/booking");

// ============================
// GET ALL ROOMS
// ============================

router.get("/getallrooms", async (req, res) => {

  console.log("Anrop mottaget till /getallrooms");

  try {

    const rooms = await Room.find({});

    console.log("Hittade rum:", rooms.length);

    res.json({ rooms });

  } catch (error) {

    console.log("Fel vid hämtning:", error);

    res.status(400).json({ message: error.message });

  }

});


// ============================
// GET AVAILABLE ROOMS
// ============================

router.post("/getavailablerooms", async (req, res) => {

  try {

    let { checkin, checkout, guests } = req.body;

    // konvertera till Date
    checkin = new Date(checkin);
    checkout = new Date(checkout);

    const rooms = await Room.find({});
    const bookings = await Booking.find({});

    let availableRooms = [];

    rooms.forEach(room => {

      // filtrera bokningar för detta rum
      const roomBookings = bookings.filter(
        booking => booking.roomId.toString() === room._id.toString()
      );

      let available = true;

      roomBookings.forEach(booking => {

        const bookingCheckin = new Date(booking.checkin);
        const bookingCheckout = new Date(booking.checkout);

        if (

          (checkin >= bookingCheckin && checkin < bookingCheckout) ||
          (checkout > bookingCheckin && checkout <= bookingCheckout) ||
          (checkin <= bookingCheckin && checkout >= bookingCheckout)

        ) {

          available = false;

        }

      });

      // kontrollera max gäster
      if (available && room.maxGuests >= guests) {

        availableRooms.push(room);

      }

    });

    res.json({ rooms: availableRooms });

  } catch (error) {

    console.log(error);

    res.status(400).json({ message: error.message });

  }

});

module.exports = router