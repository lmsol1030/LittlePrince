
$(document).ready(function() {
	$(".page").hide();
	$("#page-2").show();
	$("#page-2 .text").typed({
        strings: ["넓은 바다 한가운데서 혼자 뗏목을 타고 <br> 표류하는 것보다 더 고립되어 있는 것처럼 느껴졌다!"],
        typeSpeed: 100 
      });

	$("#day").click(function(){
		$("#night").fadeIn(3000);
	});
	$("#night").click(function(){
		$("#night").fadeOut(3000);
	});
	$("#page-2 .cloud").animateSprite({
	    fps:7,
	    complete: function(){
	        // use complete only when you set animations with 'loop: false'
    	}
	});
	$("#page-2 .cloud").animateSprite('stop');
	$("#page-2 .cloud").click(function(){
		$("#page-2 .cloud").animateSprite('restart');
	});
});


/*
$(document).ready(function() {
	$("#cloud").click(function(){
		$(this).css({opacity: "+=0.1"});
	});
	$(".item").click(function() {
		$(this).addClass('shake');
		var self = this;
		setTimeout(function(){$(self).removeClass('shake');}, 500);
	});


	
});
*/
