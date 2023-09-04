const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const loginHandler = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json({ message: "Incorrect Email" });
    console.log("##############################################");
    console.log(`req.body.email = ${req.body.email}`);
    console.log(`req.body.password = ${req.body.password}`);

    // const decodedPassword = CryptoJS.AES.decrypt(
    //   user.password,
    //   process.env.PASSWORD_SECRET_KEY
    // ).toString(CryptoJS.enc.Utf8);

    const decodedPassword = user.password;
    console.log("##############################################");
    console.log(`user.password = ${user.password}`);
    console.log(`decodedPassword = ${decodedPassword}`);

    decodedPassword !== req.body.password &&
      res.status(401).json({ message: "Incorrect Password" });

    const { password, ...rest } = user._doc;

    const accessToken = jwt.sign(
      { email: user.email },
      process.env.ACCESS_TOKEN
    );

    // res.json({...rest, accessToken});
    res.json({ accessToken });
  } catch (err) {
    console.log(err);
  }
};

module.exports = loginHandler;
