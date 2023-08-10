const OddsEvent = require("../model/oddsEventModel");

exports.createOddsEvent = async (req, res) => {
  try {
    const { games, time, date } = req.body;
    console.log(time);
    let endDate;
    if (time && date) {
      let [hours, minutes] = time.split(":");
      console.log(hours, minutes);
      endDate = new Date(date).setHours(hours);
      endDate = new Date(endDate).setMinutes(minutes);
    }
    let odds = { games: [] };
    if (games) {
      games.split(",").forEach((item) => {
        odds.games.push(item.trim());
      });
    }

    const oddsEvent = new OddsEvent({
      ...req.body,
      games: odds.games,
      endDate,
      time,
      user: req.body.userId,
    });
    await oddsEvent.save();
    if (oddsEvent) {
      return res.send({ success: true, data: oddsEvent });
    }
    res.send({ success: false, message: "something went wrong" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.getAllOddsEvent = async (req, res) => {
  try {
    const oddsEvents = await OddsEvent.find()
      .populate("games")
      .populate("user");

    return res.send({ success: true, data: oddsEvents });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.deleteOddsEvent = async (req, res) => {
  try {
    const oddsEvent = await OddsEvent.findByIdAndDelete(req.params.id);
    res.send({ success: true, message: "Successfull" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
exports.likeOddsEvent = async (req, res) => {
  try {
    const oddsEvent = await OddsEvent.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: req.body.userId } },
      { new: true }
    );

    res.send({ success: true, message: "Successfull", data: oddsEvent });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.commentOddsEvent = async (req, res) => {
  try {
    const oddsEvent = await OddsEvent.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: req.body.userId } },
      { new: true }
    );

    res.send({ success: true, message: "Successfull", data: oddsEvent });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
