var express = require('express');
var router = express.Router();

var test_controller = require('../controllers/testController')
var MentorListRender = require('../controllers/MentorListRender')



router.get("/paramTest/:testId", (req, res) => {
    res.render("test", {
        user:req.params.testId,
    vegetables: [
        "carrot",
        "potato",
        "ayylmao",
        "zucc"
    ]
    });
});

//Dynamic page rendering with params test
router.get('/controllerTest/:testId',test_controller.dynamic_Param_Test);

//Render mentor list page
router.get("/mentorList",MentorListRender.renderList);


//Additional test function

router.get('/response', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/mapTest', function(req, res, next) {
    res.render('mapTest');
});

module.exports = router;