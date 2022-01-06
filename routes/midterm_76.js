var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/overview_76',function(req,res,next){
    res.render('midterm_76/overview_76',{
        title: 'Express',
        name: 'Doris HSIEH',
        id: `207410076`,
    });
});

module.exports = router;