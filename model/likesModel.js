const mongoose = require("mongoose");

const likeSchema = mongoose.Schema(
  {
    isLiked: {
      type: Boolean,
      default: false,
    },

    predictionId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "predictions",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("likes", likeSchema);
