const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register/Login with Wallet Address
router.post("/auth", async (req, res) => {
    try {
      const { walletAddress, role, name, email } = req.body;
      let user = await User.findOne({ walletAddress });
  
      if (!user) {
        user = new User({ walletAddress, role, name, email });
        await user.save();
      }
  
      res.status(200).json({ message: "User authenticated", user });
    } catch (error) {
      console.error("Error in /auth route:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
});
  

// Get All Users (For Admins)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

module.exports = router;
