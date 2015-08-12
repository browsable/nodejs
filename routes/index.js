    /**
     * Created by admin on 2015-08-12.
     */

    //routing 처리
    var express = require("express"),
        router = express.Router(),
        controller = require("../controller");

    router.get("/", function (req, res) {
        res.render("index",{
            title : "Library Management System"
        })
    });
    router.get("/list", function (req, res) {
        controller.listAll(req,res);
    });
    router.post("/list", function (req, res) {
        var name = req.body.keyword;
        controller.listSearch(req,res,name);
    });
    module.exports = router;