(function () {
     var count = document.getElementsByClassName('num_input');
     var btn_subtraction = document.getElementsByClassName('btn_subtraction');
     var btn_add = document.getElementsByClassName('btn_add');
    var shopcar_img = document.getElementsByClassName('shopcar_img');
    var shopcar_name = document.getElementsByClassName('shopcar_name');
    var shopcar_brand = document.getElementsByClassName('shopcar_brand');
    var shopcar_effect = document.getElementsByClassName('shopcar_effect');
    var shopcar_singlemoney = document.getElementsByClassName('shopcar_singlemoney');
    var shopcar_totalmoney = document.getElementsByClassName('shopcar_totalmoney');
    var gb;
    var ul = document.getElementById('ul');
    var uname = document.getElementById('username');
    var shopcar_buynum = document.getElementById('shopcar_buynum');
    var shopcar_buymoney1 = document.getElementById('shopcar_buymoney1');
    var shopcar_buymoney2 = document.getElementById('shopcar_buymoney2');

    var sum = 0;


    function sendCmd(type,cb) {
        var url="http://127.0.0.1:3000/"+type;

        $.post(url,{
            type:type,
            username:sessionStorage.UserName
        },function (data,status) {
            cb(data);

            // console.log(data)
        })
    }

    function sendDeleteCmd(type,id,cb) {
        var url="http://127.0.0.1:3000/"+type;

        $.post(url,{
            type:type,
            id:id
        },function (data,status) {
            cb(data);

            // console.log(data)
        })
    }
    window.onload=function () {
        uname.innerHTML = sessionStorage.UserName;

        sendCmd('shoppingCar',function (result) {
            console.log(result);
            shopcar_buynum.innerHTML = result.length;
            for(var u=0;u<result.length;u++){
                var li = document.createElement("li");
                ul.appendChild(li);
                li.className="shopli";
                li.innerHTML='<input type="checkbox" style="top: 20px;left: 30px;">'+
                    '<p style="left: 50px;top: 20px;">选择订单</p>'+
                    '<img src="" style="width: 12%;left: 30px;top: 45px;" class="shopcar_img">'+
                    '<p style="top: 50px;left: 160px;">商品名称:</p>'+
                    '<p style="top:50px;left: 220px;" class="shopcar_name"></p>'+
                    '<p style="top: 80px;left: 160px;">品&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp牌:</p>'+
                    '<p style="top: 80px;left: 220px;" class="shopcar_brand"></p>'+
                    '<p style="top: 110px;left: 160px;">功&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp效:</p>'+
                    '<p style="top: 110px;left: 220px;" class="shopcar_effect"></p>'+
                    '<ul style="top: 10px;left: 460px;">'+
                    '<li>购买数量</li>'+
                    '<li>购买单价</li>'+
                    '<li>小计</li>'+
                    '<li>操作</li>'+
                    '</ul>'+
                    '<div>'+
                    '<button class="btn_subtraction" style="top: 90px;left: 490px;">-</button>'+
                    '<input type="text" value="1" class="num_input" style="top: 90px;left: 504px;">'+
                    '<button class="btn_add" style="top: 90px;left: 563px;">+</button>'+
                    '</div>'+

                    '<p style="top: 95px;left: 665px" class="shopcar_singlemoney"></p>'+
                    '<p style="top: 95px; left: 800px;" class="shopcar_totalmoney"></p>'+
                    '<img src="../images/icon/delete.png" style="top: 90px;left: 935px;" class="shopcar_delete" id="del_'+ result[u].id +'">'
            }



            //删除购物车商品
            var shopcar_delete= document.getElementsByClassName('shopcar_delete');


            // console.log(id_name.split('_')[1]);
            for(var i=0;i<shopcar_delete.length;i++){
                (function (i) {
                    shopcar_delete[i].onclick=function () {
                        var id_name = shopcar_delete[i].id;
                        console.log(id_name.split('_')[1]);
                        sendDeleteCmd('shoppingCarDelete',id_name.split('_')[1],function () {
                            window.location.reload();
                        })
                    }
                })(i)
            }


            //动态加载购物车数据
            for (var i =0;i<shopcar_img.length;i++){
                (function (i) {
                    gb = result;
                    shopcar_img[i].src = result[i].GoodsUrl;
                    shopcar_name[i].innerHTML = result[i].GoodsId;
                    shopcar_brand[i].innerHTML = result[i].GoodsBrand;
                    shopcar_effect[i].innerHTML = result[i].GoodsEffect;
                    shopcar_singlemoney[i].innerHTML = result[i].Price;
                    shopcar_totalmoney[i].innerHTML = parseInt(result[i].Price * Number(count[i].value));

                })(i)
            }
            for(var m = 0; m< shopcar_totalmoney.length;m++) {
                sum += Number(shopcar_singlemoney[m].innerHTML);
                shopcar_buymoney1.innerHTML = parseInt(sum);
                shopcar_buymoney2.innerHTML = parseInt(sum);

            }



            //购买数量按钮
            for(var i=0;i<count.length;i++) {
                // console.log(i);
                (function (i) {
                    btn_subtraction[i].onclick = function () {
                        if (count[i].value > 1) {
                            count[i].value -= 1;
                            shopcar_totalmoney[i].innerHTML = gb[i].Price * count[i].value;
                            sum -= Number(gb[i].Price);
                            shopcar_buymoney1.innerHTML = sum;
                            shopcar_buymoney2.innerHTML = sum;
                        } else {
                            alert("数量不能为0！")
                        }
                    };
                    btn_add[i].onclick = function () {
                        count[i].value = Number(count[i].value) + 1;
                        shopcar_totalmoney[i].innerHTML = gb[i].Price * count[i].value;
                        sum += Number(gb[i].Price);
                        shopcar_buymoney1.innerHTML = sum;
                        shopcar_buymoney2.innerHTML = sum;
                    }
                })(i)
            }

            
        });

        sendCmd('shoppingCarDelete',function (result) {

        })



    };



}(window));