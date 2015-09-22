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
    router.post('/check', function(req, res){
        var name = req.body.name;
        var phone = req.body.phone;
        console.log("name : "+name + " , phone : "+phone);
        /*var chunk = '';
        //데이터를 가져옵니다.
        req.on('data', function(data){
        //데이터를 JSON으로 파싱합니다.
            chunk = JSON.parse(data);
        });
        req.on('end',function(){
        //파싱된 데이터를 확인합니다.
            console.log("name : "+chunk.name + " , phone : "+chunk.phone);
        });
        // 아래의 OK라는 내용이 안드로이드의 ReadBuffer를 통해
        // result String으로 바뀝니다.*/
        //res.write("OK");
        res.end();
    });
    module.exports = router;