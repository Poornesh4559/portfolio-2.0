const admin = require('../controllers/adminContorller')

var express = require('express');
var router = express.Router();


router.get('/',admin.adminGet)

router.post('/',admin.adminPost)

module.exports = router