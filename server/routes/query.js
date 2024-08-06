const express = require('express');
const router = express.Router();
const Query = require('../models/Query'); // Adjust the path to your Query model

// POST route to create a new query
router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, message } = req.body;
    const newQuery = new Query({ name, email, phoneNumber, subject, message });
    await newQuery.save();
    res.status(201).json(newQuery);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create query' });
  }
});

// GET route to fetch all queries, excluding the __v field
router.get('/', async (req, res) => {
  try {
    // Fetch queries and exclude the `__v` field
    const queries = await Query.find({}, '-__v');
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch queries' });
  }
});

module.exports = router;
