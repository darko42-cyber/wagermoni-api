const mongoose = require("mongoose");

const oddsEventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    rating: Number,
    eventType: { type: String },
    status: { type: String, default: "pending" },
    bookingCode: { type: String },
    startDate: { type: Date, default: Date.now() },
    endDate: { type: Date, default: Date.now() },
    time: String,
    accuracy: { type: Number, min: 50, max: 100, default: 50 },
    price: { type: Number, required: true },
    odds: { type: Number, required: true },
    result: { type: String, default: "unsettled" },
    likes: { type: Array, default: [] },
    games: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "predictions",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("oddsEvent", oddsEventSchema);
