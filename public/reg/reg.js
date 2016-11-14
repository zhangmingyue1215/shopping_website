(function () {
    var username=document.getElementById('username_input');
    var password=document.getElementById('password_input');
    var confirm_password = document.getElementById('confirm_password');
    var reg_btn=document.getElementById('confirm_reg');
    var confirm_password_p = document.getElementById('confirm_password_p');
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
    //注册按钮
    reg_btn.onclick=function () {
        sendCmd('reg',function (result) {
            console.log(result);
            if(result){
                alert('注册成功');
                location.href='../login/login.html'

            }else{
                alert('该用户名已存在')
            }
        });

    }

    // function pwd() {
    //     if(confirm_password.value ===password.value){
    //         confirm_password_p.style.display = 'none';
    //     }else {
    //         confirm_password_p.style.display = 'block';
    //
    //     }
    // }
    // pwd();
})();