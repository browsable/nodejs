/**
 * Created by admin on 2015-08-12.
 */
    var pool = require("../lib/_DBPool");
    var mysql = require("mysql");

    exports.listAll = function(req,res){
        // 2. 로직처리 ( DB처리 )
        pool.acquire(function (err, conn) {
            if(err){
                console.log("connection 획득 실패!");
            }else{
                conn.query("select * from books",function(err, result, field){
                    if(err){
                        console.log("SQL에 문제가 있음");
                    }else{
                        //console.log(result);
                        res.render("list",{
                            data : result
                        });
                    }
                });
            }
        });
        // 3. view 처리
    };

    exports.listSearch = function(req,res,keyword){
    // 2. 로직처리 ( DB처리 )
    pool.acquire(function (err, conn) {
        if(err){
            console.log("connection 획득 실패!");
        }else{
            console.log(keyword);
            var sql = "select * from books where btitle like ?";
            var param = [ "%" + keyword + "%"];
            sql = mysql.format(sql,param);
            conn.query(sql,function(err, result, field){
                if(err){
                    console.log("SQL에 문제가 있음");
                }else{
                    //console.log(result);
                    res.render("list",{
                        data : result
                    });
                }
            });
        }
    });
    // 3. view 처리
};