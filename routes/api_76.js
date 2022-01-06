var express = require('express')
var router = express.Router()
const apiCrown2Controller_76 = require('../controllers/apiCrown2Controller_76')

/* crown_xx */
router.get('category_76', apiCrown2Controller_76.getCategories)
router.get('/shop_76', apiCrown2Controller_76.getShop)
router.get('/shop_76/:category', apiCrown2Controller_76.getProductsByCategory)

/* midproj_xx */
router.get('/midproj_76.js', apiCrown2Controller_76.getmovie)

/* finalproj_xx */
router.get('/finalproj_76.js', apiCrown2Controller_76.getmovie2)

module.exports = router
