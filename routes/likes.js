const router = require("express").Router();
const {
  likePrediction,
  unlikePrediction,
  allLikes,
} = require("../controller/likes");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/like", authMiddleware, likePrediction);
router.post("/unlike", authMiddleware, unlikePrediction);
router.post("/all-likes", authMiddleware, allLikes);
// router.post("/likeExist", authMiddleware, likeExist);

module.exports = router;
