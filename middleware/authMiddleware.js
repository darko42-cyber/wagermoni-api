const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    const { access_token } = req.cookies;

    if (!access_token) {
      return res.send({ success: false, message: "Token required" });
    }
    const decryptedToken = jwt.verify(access_token, process.env.JWT_SEC);
    req.body.userId = decryptedToken._id;
    next();
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
