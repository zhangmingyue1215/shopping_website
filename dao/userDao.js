var mysql = require('mysql');
var conf = require('../conf/db');
var sql = require('./userSqlMapping');

var jsonWrite = function (res,ret) {
    if(typeof ret ==='undefined'){
        res.json({
            code:"4",
            msg:'操作失败'
        })
    }else{
        res.json(ret);
    }
};

module.exports = {
    login:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.queryById,[req.body.username,req.body.password],function (err,rows,result) {
                    if(rows.length){
                        res.contentType('json');
                        res.send(JSON.stringify({result:true}));
                        res.end();
                    }else{
                        res.contentType('json');
                        res.send(JSON.stringify({result:false}));
                        res.end();
                    }
            });
        connection.end();
    },
    reg:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.queryById,[req.body.username,req.body.password],function (err,rows,result) {
            console.log(rows);
            if(rows.length){
                res.contentType('json');
                res.send(JSON.stringify({result:false}));
                res.end();
            }else{
                connection.query(sql.insert,[req.body.username,req.body.password],function (err,rows,result) {
                res.contentType('json');
                    res.send(JSON.stringify({result:true}));
                    res.end();

                });
            }

        });
     //   connection.end();
    }

};