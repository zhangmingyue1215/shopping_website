var user = {
    insert:'insert into login (UserName,UserPass) values (?,?)',
    update:'update login set UserPass=? where UserName=?',
    delete:'delete from login where UserName=? and UserPass=?',
    queryById:'select * from login where UserName = ? and UserPass=?',
    queryAll:'select * from login'
};

module.exports = user;