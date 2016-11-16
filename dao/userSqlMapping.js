
module.exports = {
    user: {
        insert:'insert into login (UserName,UserPass) values (?,?)',
        update:'update login set UserPass=? where UserName=?',
        delete:'delete from login where UserName=? and UserPass=?',
        queryById:'select * from login where UserName = ? and UserPass=?',
        queryAll:'select * from login'
    },
    goods:{
        queryAll:'select * from goods where Module = "dizhuang"',
        queryByModule:'select * from goods where Module = "special"',
        queryByModule2:'select * from goods where Module = "optimal"',
        queryByModule3:'select * from goods where Module = "xiaoliang"',
        selectByName:'select * from goods where Name = ?'
    },
    shopcar:{
        insert:'insert into  shopcar (UserName,GoodsId,GoodsUrl,GoodsBrand,GoodsEffect,Num,BuyNum,Price) values (?,?,?,?,?,?,?,?)',
        delete:'delete from shopcar where GoodsUrl = ?',
        queryAll:'select * from shopcar where UserName = ?'
    }
};
