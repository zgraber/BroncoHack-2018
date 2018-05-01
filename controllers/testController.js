
exports.dynamic_Param_Test = function(req, res){

    var time=new Date();



    res.render("test", {
        user: req.params.testId,
        vegetables: [
            "carrot",
            "potato",
            "ayylmao",
            "zucc",
            "test",
            ":)",
            req.params.testId,
            "added",
            "added2",
            time.getSeconds()
        ]
    });
};

