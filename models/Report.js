const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
