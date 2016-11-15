(function() {
	//轮播
	var banner = document.getElementById('banner');
	setInterval(function lunbo(){
		var p = document.getElementById('banner');
		if(p.src.match('banner.jpg')){
			p.src = "../images/shouye/banner2.jpg";
		}else if(p.src.match('banner2.jpg')){
			p.src = "../images/shouye/banner3.jpg";
		}else if(p.src.match('banner3.jpg')){
			p.src = "../images/shouye/banner.jpg";
		}
	},2000);


	function sendCmd(type,cb) {
		var url="http://127.0.0.1:3000/"+type;
		$.post(url,{
			type:type
		},function (data,status) {
			cb(data);
		})
	}
	window.onload=function () {
		sendCmd('cIndex',function (result) {
			console.log(result);
			var special_img = document.getElementsByClassName('special_img');
			var special_name = document.getElementsByClassName('special_name');
			var special_describe = document.getElementsByClassName('special_describe');
			var special_num = document.getElementsByClassName('special_num');
			var special_original = document.getElementsByClassName('special_original');
			for(var i = 0;i<special_img.length;i++){
				(function (i) {
					special_img[i].src = result[i].Url;
					special_name[i].innerHTML = result[i].Name;
					special_describe[i].innerHTML = result[i].Miaoshu;
					special_num[i].innerHTML = result[i].Price;
					special_original[i].innerHTML = result[i].Original;
				})(i)
			}
		});
		sendCmd('cIndex2',function (result) {
			console.log(result);
			var optimal_img = document.getElementsByClassName('optimal_img');
			var optimal_name = document.getElementsByClassName('optimal_name');
			var optimal_introduce = document.getElementsByClassName('optimal_introduce');
			var optimal_style = document.getElementsByClassName('optimal_style');
			var optimal_num = document.getElementsByClassName('optimal_num');

			for(var i=0;i<4;i++){
				(function (i) {
					optimal_img[i].src = result[i].Url;
					optimal_name[i].innerHTML = result[i].Name;
					optimal_introduce[i].innerHTML = result[i].Miaoshu;
					optimal_style[i].innerHTML = result[i].Style;
					optimal_num[i].innerHTML = result[i].Price;
				})(i)
			}
		});
		sendCmd('cIndex3',function (result) {
			console.log(result);
			var xiaoliang_img = document.getElementsByClassName('xiaoliang_img');
			var xiaoliang_name = document.getElementsByClassName('xiaoliang_name');
			var xiaoliang_num = document.getElementsByClassName('xiaoliang_num');

			for(var i=0;i<24;i++){
				(function (i) {
					xiaoliang_img[i].src = result[i].Url;
					xiaoliang_name[i].innerHTML = result[i].Name;
					xiaoliang_num[i].innerHTML = result[i].Price;
				})(i)
			}
		});
	}



}(window))