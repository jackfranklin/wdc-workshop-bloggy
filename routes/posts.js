var express = require('express');
var router = express.Router();
var conn = require('../db');
var ObjectID = require('mongodb').ObjectID;

router.get('/:id', function(req, res) {
  var id = ObjectID(req.params.id);

  conn(function(db, doneCb) {
    var collection = db.collection('posts');

    collection.findOne({ _id: id }, function(err, post) {
      res.render('post', { post: post });
      doneCb();
    });
  });


});
module.exports = router;

