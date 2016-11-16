
var select_div = document.getElementById('select_div');
var pinpai_sel1 = select_div.childNodes[1].childNodes[3].childNodes;
var pinpai_sel2 = select_div.childNodes[1].childNodes[5].childNodes;
var gongxiao_sel1 = select_div.childNodes[3].childNodes[3].childNodes;
var gongxiao_sel2 = select_div.childNodes[3].childNodes[5].childNodes;
var fuzhi_sel = select_div.childNodes[5].childNodes[3].childNodes;
var jiage_sel = select_div.childNodes[7].childNodes[3].childNodes;
var paixv_sel = select_div.childNodes[9].childNodes[3].childNodes;
var pinpai_btn = select_div.childNodes[1].lastChild.previousSibling;
var gongxiao_btn = select_div.childNodes[3].lastChild.previousSibling;
var pinpai = '';
var gongxiao = '';
//品牌效果
for (var i = 0; i < pinpai_sel1.length; i++) {
    (function (i) {
        pinpai_sel1[i].onclick = function () {
            pinpai_sel1[i].classList.toggle('selected');
            pinpai += pinpai_sel1[i].innerHTML;
        }
    })(i);
}
for (var i = 0; i < pinpai_sel2.length; i++) {
    (function (i) {
        pinpai_sel2[i].onclick = function () {
            pinpai_sel2[i].classList.toggle('selected');
            pinpai += pinpai_sel2[i].innerHTML;
        }
    })(i);
}
pinpai_btn.onclick = function () {
    if (select_div.childNodes[1].childNodes[5].style.display == 'none') {
        select_div.childNodes[1].childNodes[5].style.display = 'inline-block';
        pinpai_btn.innerHTML = '展开▲';
    }
    else {
        select_div.childNodes[1].childNodes[5].style.display = 'none'
        pinpai_btn.innerHTML = '展开▼';
    }
    //console.log(pinpai);
};
//功效效果
for (var i = 0; i < gongxiao_sel1.length; i++) {
    (function (i) {
        gongxiao_sel1[i].onclick = function () {
            gongxiao_sel1[i].classList.toggle('selected');
            gongxiao += gongxiao_sel1[i].innerHTML;
        }
    })(i);
}
for (var i = 0; i < gongxiao_sel2.length; i++) {
    (function (i) {
        gongxiao_sel2 [i].onclick = function () {
            gongxiao_sel2 [i].classList.toggle('selected');
            gongxiao += gongxiao_sel2 [i].innerHTML;
        }
    })(i);
}
gongxiao_btn.onclick = function () {
    if (select_div.childNodes[3].childNodes[5].style.display == 'none') {
        select_div.childNodes[3].childNodes[5].style.display = 'inline-block';
        pinpai_btn.innerHTML = '展开▲';
    }
    else {
        select_div.childNodes[3].childNodes[5].style.display = 'none'
        pinpai_btn.innerHTML = '展开▼';
    }
};
//肤质
for (var i = 0; i < fuzhi_sel.length; i++) {
    (function (i) {
        if (fuzhi_sel[i].tagName == 'SPAN') {
            fuzhi_sel[i].onclick = function () {
                fuzhi_sel[i].classList.toggle('selected');
            }
        }
    })(i);
}
//价格
for (var i = 0; i < jiage_sel.length; i++) {
    (function (i) {
        if (jiage_sel[i].tagName == 'SPAN') {
            jiage_sel[i].onclick = function () {
                jiage_sel[i].classList.toggle('selected');
            }
        }
    })(i);
}
//排序
for (var i = 0; i < paixv_sel.length; i++) {
    (function (i) {
        if (paixv_sel[i].tagName == 'SPAN') {
            paixv_sel[i].onclick = function () {
                for (var j = 2; j < paixv_sel.length; j++) {
                    paixv_sel[j].className = '';
                }
                paixv_sel[i].className = 'selected';
            }
        }
    })(i);
}

//从后台加载内容
(function () {
    function sendCmd(type,cb) {
        var url="http://127.0.0.1:3000/"+type;
        $.post(url,{
            type:type
        },function (data,status) {
            cb(data);
        })
    }
    var obj={
        UserName:"",
        GoodsId:"",
        GoodsUrl:"",
        GoodsBrand:"",
        GoodsEffect:"",
        Num:"",
        BuyNum:"",
        Price:""
    }
    window.onload=function () {
            sendCmd('cSelect',function (result) {
                console.log(result)
                var list_img = document.getElementsByClassName('list_img');
                var list_name = document.getElementsByClassName('list_name');
                var list_num = document.getElementsByClassName('list_num');

               for(var i = 0;i<32;i++){
                   (function (i) {
                       list_img[i].src = result[i].Url;
                       list_name[i].innerHTML = result[i].Name;
                       list_num[i].innerHTML = result[i].Original;
                   })(i)
               }


                var addincar = document.getElementsByClassName('addincar');
                for (var i = 0;i<addincar.length;i++){
                    (function (i) {
                        addincar[i].onclick = function () {
                            alert("加入购物车成功")
                            console.log("onclick")
                            console.log(result)
                            obj.UserName=sessionStorage.UserName;
                            obj.GoodsId = result[i].Name;
                            obj.GoodsUrl =result[i].Url;
                            obj.GoodsBrand= result[i].Brand;
                            obj.GoodsEffect = result[i].Miaoshu;
                            obj.Num = result[i].Num;
                            obj.BuyNum = result[i].BuyNum;
                            obj.Price =result[i].Original;
                            function send(type,cb) {
                                var url="http://127.0.0.1:3000/"+type;
                                $.post(url,{
                                    type:type,
                                    UserName:obj.UserName,
                                    GoodsId:obj.GoodsId,
                                    GoodsUrl:obj.GoodsUrl,
                                    GoodsBrand:obj.GoodsBrand,
                                    GoodsEffect:obj.GoodsEffect,
                                    Num:obj.Num,
                                    BuyNum:obj.BuyNum,
                                    Price:obj.Price
                                },function (data,status) {
                                    cb(data);
                                })

                            }
                            send('shoppingCarInsert',function (result) {
                                console.log(result)

                            })
                        }
                    })(i)
                }
            });
    }

    //搜索功能

    var input = document.getElementById('input');
    var search_btn = document.getElementById('search_btn');

    var list_img = document.getElementsByClassName('list_img');
    var list_num = document.getElementsByClassName('list_num');
    var list_name = document.getElementsByClassName('list_name');

    var url = 'http://127.0.0.1:3000/';

    search_btn.onclick = function () {
        console.log(input.value);
        $.post(url+'sList',{
            input:input.value
        },function (data,status) {
            if(data.list!=0){
                console.log(data);
                for(var m=0;m<list_img.length;m++){
                    list_img[m].src = data.list[m].Url;
                    list_num[m].innerHTML=data.list[m].Price;
                    list_name[m].innerHTML=data.list[m].Name;
                }
            }else{
                alert("没有搜索到相关物品");
            }
        })
    }


//    加入购物车


})();