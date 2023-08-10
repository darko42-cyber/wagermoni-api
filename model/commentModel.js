const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    text: { type: String, required: true },
    predictionId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "predictions",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comments", commentSchema);
