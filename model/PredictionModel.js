const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    home: { type: String, required: true },
    away: { type: String, required: true },
    rating: {
      home: Number,
      away: Number,
    },
    homeEmblem: { type: String },
    awayEmblem: { type: String },
    gameType: { type: String, required: true },
    status: { type: String, default: "pending" },
    time: { type: Date, default: Date.now() },
    onBehalf: { type: String, default: "both" },
    half: { type: String, default: "both" },
    accuracy: { type: Number, min: 50, max: 100, default: 50 },
    league: { type: String, required: true },
    leagueShortName: { type: String },
    tip: { type: String, required: true },
    result: { type: String, default: "unsettled" },
    likes: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("predictions", predictionSchema);
