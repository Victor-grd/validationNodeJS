var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, client) {
  if (err) throw err
  let db = client.db('examD2D13')

  router.get('/', function(req, res, next) {
    db.collection('gares').find().toArray(function (err, result) {
      res.render('index', { title: 'Gares', gares: result });
      // console.log(result)
    })
  });

})

module.exports = router;
