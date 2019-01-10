var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, client) {
  if (err) throw err
  let db = client.db('examD2D13')

  router.delete('/:id', function(req, res, next) {
    var toDelete = ObjectId(req.params.id);
    db.collection('gares').deleteOne({"_id" : toDelete}, function(err, data) {
      if(err) return next(err);
      return res.json(data);
    });
  });


})

module.exports = router;