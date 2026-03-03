const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// POST /api/ask endpoint
router.post('/ask', aiController.handleAskRequest);

module.exports = router;
