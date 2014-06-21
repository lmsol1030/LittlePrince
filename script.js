/*$(document).ready(function() {
	$(".page").hide();
	$("#page-0").show();
	$("#page-0").click(function(){
		$("#page-0").fadeOut(3000);
		$("#page-1").fadeIn(3000);
	})
});
*/
/*
$(document).ready(function() {
	$(".page").hide();
	$("#page-2").show();
	$("#day").click(function(){
		$("#night").fadeIn(3000);
	});
	$("#night").click(function(){
		$("#night").fadeOut(3000);
	});
	$("#page-2 .airplane").click(function(){	
		$("#page-2 .cloud").show();
		$("#page-2 .cloud").animateSprite({
			fps:7,
			loop: true,
		});
	});
	$("#page-2 .typo").click(function(){
		$("#page-2 .text").show();
		$("#page-2 .text").typed({
			strings: ["넓은 바다 한가운데서 혼자 뗏목을 타고 표류하는 것보다 더 고립되어 있는 것처럼 느껴졌다!"],
			typeSpeed: 130,
			callback: function(){
				$("#page-2").fadeOut(3000);
				$("#page-3").fadeIn(3000);
				}
			});

	});
	
});
*/
$(document).ready(function(){
	$(".page").hide();
	$('#page-3').show();
	$("#planet").click(function(){
		var bez_path = new $.path.bezier({
			start: { x:100, y:356, angle: -55}, end: {x:1200,y:850}
		});
		$("#page-3 #planet").animate({path : bez_path}, 3000);
	});
	$(".bird").click(function(){
		$("#page-3 #item1").fadeIn(3000);
		$("#page-3 #item2").fadeIn(3000);
		$("#page-3 #item3").fadeIn(3000);
		$("#page-3 #item4").fadeIn(3000);
	});
	$("#page-3 .prince2").click(function(){
		$("#page-3 #prince").fadeIn(3000);
	});
	$("#page-3 .typo").click(function(){
		$("#page-3 .text").show();
		$("#page-3 .text").typed({
			strings: ["넓은 바다 한가운데서 혼자 뗏목을 타고 표류하는 것보다 더 고립되어 있는 것처럼 느껴졌다!"],
			typeSpeed: 130,
			callback: function(){
				$("#page-3").fadeOut(3000);
				$("#page-4").fadeIn(3000);
			}
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
