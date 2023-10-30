var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 

  res.render('index', { title: 'kamal page' });
});

router.get('/pages', function(req, res, next) { 

  res.render('pages', { title: 'learn js with kamal' });
});
module.exports = router;
