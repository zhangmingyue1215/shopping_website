(function () {

    var gb;
    var ul = document.getElementById('ul');
    var uname = document.getElementById('username');
    function sendCmd(type,cb) {
        var url="http://127.0.0.1:3000/"+type;

        $.post(url,{
            type:type,
            username:sessionStorage.UserName
        },function (data,status) {
            cb(data);

        })
    }
    window.onload = function () {
        uname.innerHTML = sessionStorage.UserName;

        sendCmd('shoppingCar',function (result) {
            console.log(result);
            for(var u=0;u<result.length;u++){
                var li = document.createElement("li");
                ul.appendChild(li);

                li.innerHTML='<img src="" style="width: 12%;left: 30px;top: 45px;" class="shopcar_img">'+
                    '<p style="top: 50px;left: 160px;">商品名称:</p>'+
                '<p style="top:50px;left: 220px;" class="shopcar_name"></p>'+
                    '<p style="top: 80px;left: 160px;">品&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp牌:</p>'+
                '<p style="top: 80px;left: 220px;" class="shopcar_brand"></p>'+
                    '<ul style="top: 10px;left: 460px;">'+
                    '<li>购买数量</li>'+
                    '<li>购买单价</li>'+
                    '<li>小计</li>'+
                    '</ul>'+
                    '<p style="top: 95px;left: 530px" class="shopcar_num"></p>'+
                    '<p style="top: 95px;left: 665px" class="shopcar_singlemoney"></p>'+
                '<p style="top: 95px; left: 800px;" class="shopcar_totalmoney"></p>'
            }

            var shopcar_img = document.getElementsByClassName('shopcar_img');
            var shopcar_name = document.getElementsByClassName('shopcar_name');
            var shopcar_brand = document.getElementsByClassName('shopcar_brand');
            var shopcar_singlemoney = document.getElementsByClassName('shopcar_singlemoney');
            var shopcar_totalmoney = document.getElementsByClassName('shopcar_totalmoney');
            var shopcar_num = document.getElementsByClassName('shopcar_num');
            var number = document.getElementById('number');
            var total_qian =document.getElementById('total_qian');
            var should_pay = document.getElementById('should_pay');
            var should_total_pay =document.getElementById('should_total_pay');
            var sum = 0 ;
            //动态加载购物车数据
            for (var i =0;i<result.length;i++){
                (function (i) {
                    shopcar_img[i].src = result[i].GoodsUrl;
                    shopcar_name[i].innerHTML = result[i].GoodsId;
                    shopcar_brand[i].innerHTML = result[i].GoodsBrand;
                    shopcar_num[i].innerHTML = result[i].BuyNum;
                    shopcar_singlemoney[i].innerHTML = result[i].Price;
                    shopcar_totalmoney[i].innerHTML = Number(result[i].BuyNum)*Number(result[i].Price);

                })(i)
            }
            number.innerHTML = result.length;
            for(var m = 0; m< shopcar_totalmoney.length;m++) {
                sum += Number(shopcar_singlemoney[m].innerHTML);
                total_qian.innerHTML = parseInt(sum);
                should_pay.innerHTML = parseInt(sum);
                should_total_pay.innerHTML = parseInt(sum);
            }

        });

    }
})()