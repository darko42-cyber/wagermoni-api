const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    // const { access_token } = req.cookies;
    const token = req.header("authorization").split(" ")[1];

    if (!token) {
      return res.send({ success: false, message: "Token required" });
    }
    const decryptedToken = jwt.verify(token, process.env.JWT_SEC);
    req.body.userId = decryptedToken._id;
    next();
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
