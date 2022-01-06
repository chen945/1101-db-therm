var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/',function(req,res,next){
    res.render('midproj_76/midproj_76',{
        title: 'Express',
        name: 'Doris HSIEH',
        id: `207410076`,
    });
});

module.exports = router;