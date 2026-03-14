
const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://mz_database_user:hotelnorellidb@cluster0.qtjhrnh.mongodb.net/norelli_db?retryWrites=true&w=majority";


mongoose.connect(mongoURL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log("MongoDB connection error:", err));


module.exports = mongoose;