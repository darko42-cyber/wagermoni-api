const { register, login, loadUser } = require("../controller/usersController");

const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
router.post("/register", register);
router.post("/login", login);
router.get("/load-user", authMiddleware, loadUser);

module.exports = router;
