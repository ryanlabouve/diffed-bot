var express = require('express');
var router = express.Router();

/* POST . */
router.post('/', function(_req, res, _next) {
  res.json({ message: 'yerp' });
});

module.exports = router;
