const Like = require("../model/likesModel");

exports.likePrediction = async (req, res) => {
  const { predictionId } = req.body;
  try {
    let like = await Like.findOne({
      predictionId,
      userId: req.body.userId,
    });
    if (like) {
      return res.send({ success: false, message: "Unlike" });
    }
    like = await Like.create({
      userId: req.body.userId,
      predictionId,
    });
    res.send({ success: true, message: "Liked" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
exports.unlikePrediction = async (req, res) => {
  const { predictionId } = req.body;
  try {
    const like = await Like.findOne({ userId: req.body.userId, predictionId });

    if (like) {
      const deleteLike = await Like.findByIdAndDelete(like._id);
      return res.send({ success: true, message: "Unliked" });
    } else {
      return res.send({ success: false, message: "unlike" });
    }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
exports.allLikes = async (req, res) => {
  const { predictionId } = req.body;
  let isLiked;
  try {
    const likes = await Like.find({ predictionId });
    const likeExist = await Like.findOne({
      predictionId,
      userId: req.body.userId,
    });

    if (likeExist) {
      isLiked = true;
    }

    if (!likes.length > 0) {
      return res.send({ success: false, isLiked: false });
    }

    res.send({ success: true, data: likes, isLiked });
  } catch (error) {
    res.send({ success: false, message: error.message, isLiked: false });
  }
};
