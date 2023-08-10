const {
  createOddsEvent,
  getAllOddsEvent,
  deleteOddsEvent,
  likeOddsEvent,
} = require("../controller/oddsEvent");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/new-odds", authMiddleware, createOddsEvent);
router.get("/get-all-odds", getAllOddsEvent);
router.delete("/delete-oddsEvent/:id", authMiddleware, deleteOddsEvent);
router.put("/like-oddsEvent/:id", authMiddleware, likeOddsEvent);

module.exports = router;
