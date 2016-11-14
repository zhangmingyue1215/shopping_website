(function() {
	//图片点击更换
	var big_img =  document.getElementById('xq_big_img');
	var xq_smallimg01 = document.getElementById('xq_smallimg01');
	var xq_smallimg02 = document.getElementById('xq_smallimg02');
	var xq_smallimg03 = document.getElementById('xq_smallimg03');
	var xq_smallimg04 = document.getElementById('xq_smallimg04');

	xq_smallimg01.onclick = function(){
		big_img.src = "../images/xiangqing/详情_44.png"
	};
	xq_smallimg02.onclick = function(){
		big_img.src = "../images/xiangqing/xiangqing_08.png"
	};
	xq_smallimg03.onclick = function(){
		big_img.src = "../images/xiangqing/xiangqing_10.png"
	};
	xq_smallimg04.onclick = function(){
		big_img.src = "../images/xiangqing/xiangqing_12.png"
	};

    //数量加减
	var btn_subtraction = document.getElementById('btn_subtraction');
	var count = document.getElementById('num_input');
	var btn_add = document.getElementById("btn_add");

	btn_subtraction.onclick = function () {
		if(count.value>1){
			count.value -=1;
		}else {
			alert("数量不能为0！")
		}
	}
	btn_add.onclick = function () {
		count.value = parseInt(count.value)+1;
	}


	//样式选择
	var colorstyle1 = document.getElementById('colorstyle1');
	var colorstyle2 = document.getElementById('colorstyle2');
	var colorstyle3 = document.getElementById('colorstyle3');

	colorstyle1.onclick = function () {
		colorstyle1.style.border = "1px solid #f39800";
		colorstyle2.style.border = "1px solid #838383";
		colorstyle3.style.border = "1px solid #838383";
	}
	colorstyle2.onclick = function () {
		colorstyle2.style.border = "1px solid #f39800";
		colorstyle1.style.border = "1px solid #838383";
		colorstyle3.style.border = "1px solid #838383";
	}
	colorstyle3.onclick = function () {
		colorstyle3.style.border = "1px solid #f39800";
		colorstyle2.style.border = "1px solid #838383";
		colorstyle1.style.border = "1px solid #838383";
	}

}(window));