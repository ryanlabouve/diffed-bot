const express = require('express');
const router = express.Router();
const bot = require('../bot.js');


/* POST . */
router.post('/', function(_req, res, _next) {
  res.json({ message: 'yerp' });
});

module.exports = router;
