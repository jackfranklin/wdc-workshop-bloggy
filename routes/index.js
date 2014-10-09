var express = require('express');
var conn = require('../db');

var router = express.Router();

router.get('/', function(req, res) {
  conn(function(db, doneCb) {
    var posts = db.collection('posts');

    posts.find().toArray(function(err, posts) {
      res.render('index', {
        title: 'Express',
        posts: posts
      });
      doneCb();
    });
  });
});

module.exports = router;
