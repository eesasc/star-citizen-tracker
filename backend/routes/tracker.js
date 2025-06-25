const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

router.post('/', async (req, res) => {
  try {
    const { user, activity, duration } = req.body;
    const session = new Session({ user, activity, duration });
    await session.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:user', async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.params.user });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
