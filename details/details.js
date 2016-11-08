(function() {
	var big_img =  document.getElementById('xq_big_img');
	var xq_smallimg01 = document.getElementById('xq_smallimg01');
	var xq_smallimg02 = document.getElementById('xq_smallimg02');
	var xq_smallimg03 = document.getElementById('xq_smallimg03');
	var xq_smallimg04 = document.getElementById('xq_smallimg04');

	xq_smallimg01.onclick = function(){
		big_img.src = "../images/xiangqing/详情_44.png"
	}
	xq_smallimg02.onclick = function(){
		big_img.src = "../images/xiangqing/xiangqing_08.png"
	}
	xq_smallimg03.onclick = function(){
		big_img.src = "../images/xiangqing/xiangqing_10.png"
	}
	xq_smallimg04.onclick = function(){
		big_img.src = "../images/xiangqing/xiangqing_12.png"
	}
}(window))