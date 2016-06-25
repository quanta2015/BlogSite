var express = require('express');
var router = express.Router();
var dbHelper = require('../db/dbHelper');


router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express', layout: 'main' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { layout: 'lg' });
});

router.post('/login', function(req, res, next) {
  dbHelper.findUsr(req.body, function (success, doc) {
    if(success) {
      res.send(doc);
    }else{
      res.send(doc);
    }
  })

  // dbHelper.addUser(req.body,function(success,doc){
  //   if(success) {
  //     res.send(doc);
  //   }else{
  //     console.log(doc);
  //   }
  // })
});

module.exports = router;
