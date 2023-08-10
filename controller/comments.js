const Comment = require("../model/commentModel");
exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      userId: req.body.userId,
      ...req.body,
    });
    res.send({ success: true, message: "Comment sent" });
  } catch (error) {
    res.status({ success: false, message: error.message });
  }
};

exports.getComments = async (req, res) => {
  const { id } = req.body;
  try {
    const comments = await Comment.find({ predictionId: id })
      .populate("userId")
      .populate("predictionId");

    if (comments.length > 0) {
      return res.send({ success: true, data: comments });
    } else {
      throw new Error("No comments for this prediction");
    }
  } catch (error) {
    res.status({ success: false, message: error.message });
  }
};
