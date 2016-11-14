(function () {
	var yincang = document.getElementById('yincang');
	var yincang_wangyin = document.getElementById('yincang_wangyin');
	var yhk_zhankai = document.getElementById('yhk_zhankai');
	var wangyin_zhankai = document.getElementById('wangyin_zhankai');
	yhk_zhankai.onclick = function(){
		if (yincang.style.display == "none") {
			yincang.style.display = "block";
		}else{
			yincang.style.display = "none";
		}	
	}
	wangyin_zhankai.onclick = function(){
		if (yincang_wangyin.style.display == "none") {
			yincang_wangyin.style.display = "block";
		}else{
			yincang_wangyin.style.display = "none";
		}
		
	}
}(window))