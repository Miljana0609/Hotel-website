require("dotenv").config();
const express = require("express");
const cors = require("cors");
const roomsRoute = require("./routes/roomsRoute");
const restaurangRoute = require("./routes/restaurangRoute");
const spaRoute = require("./routes/spaRoute");
require("./db"); // startar MongoDB-anslutning

const app = express();

app.use(cors());        // tillåter requests från Postman/frontend
app.use(express.json()); // parser JSON

// Routes
app.use("/api/rooms", roomsRoute);
app.use("/api/restaurang", restaurangRoute);
app.use("/api/spa", spaRoute);

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});