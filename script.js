$(document).ready(function() {
	$(".page").hide();
	$("#page-0").show();
	//page-0
	$("#page-0").click(function(){
		$("#page-0 .text").show();
		$("#page-0 .name").show();
		$("#BgSound")[0].load();
		$("#BgSound")[0].play();
		$("#page-0 .text").typed({
			strings: ["The Little prince"],
			typeSpeed: 80,
			callback: function(){
				$("#page-0 .name").typed({
					strings: ["0947704_강동길, 1240197_이미솔"],
					typeSpeed: 80,
					callback: function(){
						$("#page-0").fadeOut(3000);
						$("#page-1").fadeIn(3000);
					}
				});
			}
		});
	
	
	});
	//page1
	$("#page-1 .flower").click(function(){	
		$("#page-1 #rose1").delay("slow").fadeIn();
		$("#page-1 #rose1").animateSprite({
			fps:3,
			loop: false,
		});
		$("#page-1 #rose2").delay(2000).fadeIn();
		$("#page-1 #rose2").animateSprite({
			fps:3,
			loop: false,
		});
		$("#page-1 #rose3").delay(4000).fadeIn();
		$("#page-1 #rose3").animateSprite({
			fps:3,
			loop: false,
		});
	
	});
		$("#page-1 .typo").click(function(){
		$("#page-1 .text").show();
		$("#page-1 .text").typed({
			strings: ['"가시는 쓸모없는 거야 꽃들이 심술부려 생긴거야..."'],
			typeSpeed: 80,
			callback: function(){
				$("#page-1").fadeOut(3000);
				$("#page-2").fadeIn(3000);
				$(".october-leaf").fadeOut("fast");
				}
			});

		});
		$("#page-1 .bg").click(function(){
			$(".october-leaf").fadeIn(1000);
				$("#page-1").octoberLeaves({
				leafStyles: 4,      // Number of leaf styles in the sprite (leaves.png)
				speedC: 2,  // Speed of leaves
				rotation: 1,// Define rotation of leaves
				rotationTrue: 1,    // Whether leaves rotate (1) or not (0)
				numberOfLeaves: 10, // Number of leaves
				size: 70,   // General size of leaves, final size is calculated randomly (with this number as general parameter)
				cycleSpeed: 30     // <a href="http://www.jqueryscript.net/animation/">Animation</a> speed (Inverse frames per second) (10-100)
				});
		});

	
//page2
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
				strings: ['"넓은 바다 한가운데서 혼자 뗏목을 타고 표류하는 것보다 더 고립되어 있는 것처럼 느껴졌다!"'],
				typeSpeed: 80,
				callback: function(){
					$("#page-2").fadeOut(3000);
					$("#page-3").fadeIn(3000);
					}
			});

		});
	


//page-3
		$("#page-3 #planet").click(function(){
			$("#page-3 #planet").animate({left:'+=50px'},300);
			$("#page-3 #planet").animate({left:'-=50px'},300);
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
		$("#page-3 #star").click(function() {
			$(this).addClass('shake');
			var self = this;
			setTimeout(function(){$(self).removeClass('shake');}, 500);
		});
		$("#page-3 #star").dblclick(function(){
			var bez_path = new $.path.bezier({
			start: { x:350, y:350, angle: -65}, end: {x:1300,y:700}
			});
		$("#page-3 #star").animate({path : bez_path}, 1500);
		});
		
		$("#page-3 .typo").click(function(){
			$("#page-3 .text").show();
			$("#page-3 .text").typed({
				strings: ['"어린왕자는 아마도 철새들의 이동을 이용해 별을 떠나왔을 것이다."'],
				typeSpeed: 80,
				callback: function(){
					$("#page-3").fadeOut(3000);
					$("#page-4").fadeIn(3000);
				}
			});

		});
	


	

//page-4
		$("#page-4 .typo").click(function(){
			$("#page-4 .text").show();
			$("#page-4 .text").typed({
				strings: ["'나의 장미에 대해 책임이 있다....'이말을 결코 잊지않으려는 듯 어린왕자는 조용히 되뇌었다."],
				typeSpeed: 80,
				callback: function(){
					$("#page-4").fadeOut(3000);
					$("#page-0").fadeIn(3000);
					$(".october-leaf").fadeOut("fast");
				}
			});

		});
		$("#page-4 #fox").click(function(){
			$("#page-4 #fox").animate({top:'-=80px'},200);
			$("#page-4 #fox").animate({top:'+=80px'},200);
		});
		$("#page-4 .bg").click(function(){
  		$(".october-leaf").css("background-image","url('images/page-4/s.png')").fadeIn(1000);
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
