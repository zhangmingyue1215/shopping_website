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
        connection.query(sql.user.queryById,[req.body.username,req.body.password],function (err,rows,result) {
            console.log(rows);
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
        connection.query(sql.user.queryById,[req.body.username,req.body.password],function (err,rows,result) {
            console.log(rows);
            if(rows.length){
                res.contentType('json');
                res.send(JSON.stringify({result:false}));
                res.end();
            }else{
                connection.query(sql.user.insert,[req.body.username,req.body.password],function (err,rows,result) {
                res.contentType('json');
                    res.send(JSON.stringify({result:true}));
                    res.end();

                });
            }

        });
    },
    cSelect:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.goods.queryAll,[req.body.username,req.body.password],function (err,rows,result) {
            res.send(rows);
        });
    },
    cIndex:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.goods.queryByModule,[req.body.username,req.body.password],function (err,rows,result) {
            res.send(rows);
        });
    },
    cIndex2:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.goods.queryByModule2,[req.body.username,req.body.password],function (err,rows,result) {
            res.send(rows);
        });
    },
    cIndex3:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.goods.queryByModule3,[req.body.username,req.body.password],function (err,rows,result) {
            res.send(rows);
        });
    },
    sList:function (req,res,next) {
        res.contentType('json');
        var params = {
            input:req.body.input
        };
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.goods.selectByName,[params.input],function (err,rows,fields) {
            params.list=rows;
            res.send(JSON.stringify(params));
            res.end();
        });
    },
    shoppingCar:function (req,res,next) {
        console.log(req.body);
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.queryAll,[req.body.username],function (err,rows,result) {
            console.log('rows:');
            res.send(rows);
        });
    },
    shoppingCarDelete:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.delete,[req.body.id],function (err,rows,result) {
            res.send(rows);
        });
    },
    shoppingCarInsert:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.insert,[req.body.UserName,req.body.GoodsId,req.body.GoodsUrl,req.body.GoodsBrand,req.body.GoodsEffect,req.body.Num,req.body.BuyNum,req.body.Price],function (err,rows,result) {
            res.send(rows);
        });
    }
    ,clearShoppingcar:function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.shopcar.clear,[req.body.username],function (err,rows,result) {
            res.send(rows);
        });
    }
};