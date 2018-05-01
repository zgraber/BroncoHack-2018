var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function(req, res) {
    res.render("test",{
        user:"Sucessful Embed"
    });
});


router.get('/response', function(req, res, next) {
    res.render("test",{
        user:req.url
    });
});

module.exports = router;