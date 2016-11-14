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
	},2000)
}(window))