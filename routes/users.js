var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.end('I AM A USER');
});

module.exports = router;
