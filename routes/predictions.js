const {
  newPrediction,
  getAllPredictions,
  updatePrediction,
  deletePrediction,
} = require("../controller/predictions");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get("/", getAllPredictions);
router.post("/new-prediction", authMiddleware, newPrediction);
router.put("/new-prediction/:id", updatePrediction);

router.delete("/new-prediction/:id", deletePrediction);

module.exports = router;
