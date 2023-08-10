const router = require("express").Router();
const { createComment, getComments } = require("../controller/comments");
const authMiddleware = require("../middleware/authMiddleware");
router.post("/create-comment", authMiddleware, createComment);
router.post("/get-comments", getComments);
module.exports = router;
