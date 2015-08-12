/**
 * Created by admin on 2015-08-12.
 */

    // 1. 필요한 module require
    var http = require("http"),
        express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require("body-parser");

    // 2. routing module require
    var routes = require("./routes");

    // 3. view setting
    app.set("views",path.join(__dirname, "views"));
    app.set("view engine", "ejs");

    // 4. express setting
    app.use(express.static(path.join(__dirname,"public")));
    app.use(bodyParser());
    app.use("/",routes);

    // 5. 서버 생성 후 기동
    http.createServer(app).listen(5000,"localhost");
    console.log("서버기동 - 5000");