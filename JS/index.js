$(function(){
	$('.zhong>ul>li').click(function(){
		$('.duan').removeClass('isnone').eq($(this).index()).addClass('.isnone');
//		$('.zhong>ul>li').css('color','white').eq($(this).index()).css('color','aquamarine');
	})
})
