$(function() {
	//		导航点击效果
	var falg = true;
	$('.caidanhengxain').click(function() {
		if(falg) {
			$('.xinxi').stop(false, true).slideDown(300);
			$('.huangxian').eq(0).css({'transform':'rotateZ(45deg)','width':'45px'});
			$('.huangxian').eq(1).css('display', 'none');
			$('.huangxian').eq(2).css({'transform':'rotateZ(-45deg)','width':'45px'});
		} else {
			$('.xinxi').stop(false, true).slideUp(300);
			$('.huangxian').eq(0).css({'transform':'rotateZ(0)','width':''});
			$('.huangxian').eq(1).css('display', 'block');
			$('.huangxian').eq(2).css({'transform':'rotateZ(0)','width':''});
		}
		falg = !falg;
	})
})