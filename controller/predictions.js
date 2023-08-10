const Predictions = require("../model/PredictionModel");
exports.getAllPredictions = async (req, res) => {
  try {
    const predictions = await Predictions.find().populate("user");

    if (predictions.length > 0)
      return res.send({ success: true, data: predictions });
    res.send({ success: false, message: "No game available" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.newPrediction = async (req, res) => {
  try {
    const existPrediction = await Predictions.findOne(req.body);
    if (existPrediction)
      return res.send({ success: false, message: "Prediction Already exist" });

    const prediction = new Predictions({
      rating: { home: req.body.Ratinghome, away: req.body.Ratingaway },
      user: req.body.userId,
      ...req.body,
    });
    await prediction.save();
    if (prediction)
      res.send({ success: true, message: "Prediction created successfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.updatePrediction = async (req, res) => {
  try {
    await Predictions.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Object.assign(prediction, req.body);
    res.send({ success: true, message: "Prediction created successfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
exports.deletePrediction = async (req, res) => {
  try {
    await Predictions.findByIdAndDelete(req.params.id);
    res.send({ success: true, message: "Prediction created successfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

//* This controller is for liking and unliking predictions
