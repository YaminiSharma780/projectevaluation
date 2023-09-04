const CryptoJS = require("crypto-js");

const User = require("../models/userModel");

const singupHandler = async (req, res) => {
  try {
    console.log("**********************************************");
    console.log(`req.body.firstname : ${req.body.firstname}`);
    console.log(`req.body.lastname : ${req.body.lastname}`);
    console.log(`req.body.telnum : ${req.body.telnum}`);
    console.log(`req.body.email : ${req.body.email}`);
    console.log(`req.body.password : ${req.body.password}`);
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      telnum: req.body.telnum,
      email: req.body.email,
      password: req.body.password,
      // password: CryptoJS.AES.encrypt(
      //   req.body.password,
      //   process.env.PASSWORD_SECRET_KEY
      // ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log("**********************************************");
    console.log(`req.body.firstname : ${req.body.firstname}`);
    console.log(`req.body.lastname : ${req.body.lastname}`);
    console.log(`req.body.telnum : ${req.body.telnum}`);
    console.log(`req.body.email : ${req.body.email}`);
    console.log(`req.body.password : ${req.body.password}`);
    console.log(`newUser = ${newUser}`);
    console.log(`savedUser = ${savedUser}`);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating a user" });
  }
};

module.exports = singupHandler;
