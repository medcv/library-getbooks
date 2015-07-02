var express = require('express');
var router = express.Router();

/* GET book page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  db.query('SELECT * FROM tbl_book', function(err, results, fields){
    if (err) {
        res.send('error in database');
    }else{
        res.render('book', { title: 'List of All Books',
                         books:results});
    }
  })

});

module.exports = router;