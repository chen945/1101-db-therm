var express = require('express');
var router = express.Router();
const crown2Controller_76 = require('../controllers/crown_76/crown2Controller_76');

/* GET home page. */
router.get('/', crown2Controller_76.getCategories);

module.exports = router;
