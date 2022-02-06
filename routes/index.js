var express = require('express');
var router = express.Router();
const contact = require('../controllers/indexController')

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',contact.contact)



module.exports = router;
