const User = require("../models/User");
require("dotenv").config();

module.exports = {
  signUp: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      const preUrl = process.env.NODE_ENV == "dev" ? "http" : "https";
      const imageUrl = `${preUrl}://${req.headers.host}/` + req.file.path;
      const user = await User.create({
        fullName,
        email,
        password,
        imageUrl,
      });
      return res.status(200).send({
        success: true,
        statusCode: 200,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        statusCode: 500,
        message: "Server Error",
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      return res.status(200).send({
        success: true,
        statusCode: 200,
        message: "User fetched successfully",
        data: users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        statusCode: 500,
        message: "Server Error",
      });
    }
  },
};
