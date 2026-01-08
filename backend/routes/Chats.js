const express = require("express");
const chatSchema = require("../models/ChatModels");
const router = express.Router();

router.get("/", async (req, res) => {
  const chats = await chatSchema.find({});
  res.status(200).json(chats);
});

router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const chat = await chatSchema.create(data);
    res.status(200).json(chat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
