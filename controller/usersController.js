const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  let { name, email, password, avatar } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User account already exists");
    }

    // let fileName;

    // if (avatar) {
    //   fileName = `http://localhost:5000/uploads/${req.file.filename}`;
    // }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    password = hashedPassword;
    user = await User.create({ name, email, password });
    await user.save();
    res.send({ success: true, data: user });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;

  try {
    //? check if user already exist with help of the email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.status !== "active") {
      throw new Error("Account blocked");
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC, {
      expiresIn: "2h",
    });
    res.status(200).send({
      success: true,
      message: "User logged in successful",
      data: token,
    });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.loadUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user)
      return res.send({ success: false, message: "User not logged in" });
    res.send({ success: true, data: user });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
