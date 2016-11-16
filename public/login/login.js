(function () {
    var username=document.getElementById('account_input');
    var password=document.getElementById('password_input');
    var login_btn=document.getElementById('login_btn');
    function sendCmd(type,cb) {
        var url="http://127.0.0.1:3000/"+type;
        $.post(url,{
            type:type,
            username:username.value,
            password:password.value
        },function (data,status) {
            cb(data.result);
            console.log(data.result)
        })
    }
    //登录按钮
    login_btn.onclick=function () {
        sendCmd('login',function (result) {
            console.log(result)
            if(result){
                alert('登录成功');
                sessionStorage.setItem('UserName',username.value);

                location.href='../index.html'
            }else{
                alert('登陆失败')
            }
        });
    }
})();