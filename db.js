var MongoClient = require('mongodb').MongoClient;

var MONGO_USER = 'jack';
var MONGO_PWD = 'testing';
var MONGOHQ_URL = 'mongodb://' + MONGO_USER + ':' + MONGO_PWD + '@linus.mongohq.com:10011/wdc_blog';

module.exports = function(fn) {
  MongoClient.connect(MONGOHQ_URL, function(err, db) {
    fn(db, function() {
      db.close();
    });
  });
};



