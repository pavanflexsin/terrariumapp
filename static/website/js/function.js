$(document).ready(function(){	
	$(document).mouseup(function (e)
	{ 
		var container = $(".showDD");
		var container1 = $(".ddBox");
		var container2 = $(".ddBox *");
		if (!container.is(e.target)  && !container2.is(e.target)   &&   !container.is(e.target)  && !container1.is(e.target)   && container.has(e.target).length === 0) // ... nor a descendant of the container
		{	
			container1.stop().slideUp(0);
			$(".showDD").removeClass("active");
		} 
	});
	
	$(".showDD").click(function(){
		$(".ddBox").slideUp(0);	
		if($(this).hasClass("active")){
				$(".showDD").removeClass("active");
				$(this).next(".ddBox").slideUp(0);
		}
		else{
				$(".showDD").removeClass("active");
				$(this).addClass("active");
				$(this).next(".ddBox").slideDown(300);
		}
	}); 	
	
	$(".selectPopup li.choose").click(function() {
		var txtid = $(this).text();
		$('.optionLink span').text(txtid);
		$('.ddBox').hide(0);
		$('.optionLink').removeClass('active');
		$('.selectPopup li.choose').removeClass('active');
		$(this).addClass('active');
		var imgid = $(this).find('img').attr('src');
		$('.optionLink').find('img').attr('src',imgid);
	});
	
	$('.showMobMenu').click(function() {
		$('#menu').toggleClass('active');
		$(this).toggleClass('active');
		$('body').toggleClass('active');
	});
	
	$('.checkboxInpt').each(function() {
		$(this).wrap("<span class='checkboxWrapper'></span>");
		$(this).after("<i class='bg'></i>");	
	});
	
	$('.radioInpt').each(function() {
		$(this).wrap("<span class='radioWrapper'></span>");
		$(this).after("<i class='bg'></i>");	
	});
	
	$(".showPopup").on('click',function (e) {
		e.preventDefault();
		var popId=$(this).attr("href");
		$('.overlay').fadeOut(0);
		$(popId).fadeIn(300);
		$(".mainCon").addClass("active")
	});	
	$(".closePopup").click(function() {
		$(".overlay").fadeOut(300);
		$(".mainCon").removeClass("active")
		//$("#fullpage").css("top","0");
		
	});
	
	$("#eye").click(function () {
		if ($("#password").attr("type") === "password") {
			$("#password").attr("type", "text");
			$(this).addClass('active');
		} else {
			$("#password").attr("type", "password");
			$(this).removeClass('active');
		}
	});
	
	equalheight = function(container){
	var currentTallest = 0,
		 currentRowStart = 0,
		 rowDivs = new Array(),
		 $el,
		 topPosition = 0;
	 $(container).each(function() {
	
	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;
	
	   if (currentRowStart != topPostion) {
		 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		   rowDivs[currentDiv].height(currentTallest);
		 }
		 rowDivs.length = 0; // empty the array
		 currentRowStart = topPostion;
		 currentTallest = $el.height();
		 rowDivs.push($el);
	   } else {
		 rowDivs.push($el);
		 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		 rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}
	
	$(window).load(function() {
	  	equalheight('.mainCon .eqHeight');
	});
	$(window).resize(function(){
	  	equalheight('.mainCon .eqHeight');
	});
	
	 $("#otherLanguage").click(function () {
		  if ($(this).is(":checked")) {
			  $("#languageBox").show();
		  } else {
			  $("#languageBox").hide();
		  }
	  });
	 
	 $(".showddList").on('click', function (e) {
		e.preventDefault();
		var ddAns=$(this).attr("href");
		$(ddAns).slideToggle(300);
		$(this).toggleClass("active")
	});	
	 
	$('a.profileId[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate( {
            'scrollTop': $target.offset().top-50
        }, 900, 'swing');
	});
	
	if(window.location.href.indexOf("/teacher/profile/") > -1)
    {
		$(window).scroll(function() {   
			var profleTop = $('.profileTab').offset().top; 
			var scroll = $(window).scrollTop();
			if (scroll >= profleTop) {
			   $(".profileTab  > ul").addClass("active");	   
			}
			else{
					$(".profileTab > ul").removeClass("active");
			}
		});
	}
	$(".morePopup li a").click(function () {
		$('.ddBox').slideUp(0);
		$(".showDD").removeClass("active");  
	});	
	var midRgt = $('.myprofileRight').width();
	$('.profileTab  > ul').width(midRgt);
	
	$(".selectRating li").click(function() {
		$(".selectRating li").removeClass("active");	
		$(this).prevAll('li').addClass("active");	
		$(this).addClass("active");	
	});
	
	$(function () {
        $("input[name='dtlo']").click(function () {
            if ($("#showDiscount").is(":checked")) {
                $("#discountBox").show();
            } else {
                $("#discountBox").hide();
            }
        });
    });

	$(function () {
        $("input[name='notesprovided']").click(function () {
            if ($("#shownotes").is(":checked")) {
                $(".notesprovided").show();
            } else {
                $(".notesprovided").hide();
            }
        });
    });

	$(function () {
        $("input[name='pastpapper']").click(function () {
            if ($("#shownpastpapper").is(":checked")) {
                $(".pastpapper").show();
            } else {
                $(".pastpapper").hide();
            }
        });
    });
	var midRgt = $('.myprofileRight').width();
	$('.profileTab  > ul').width(midRgt);
	
	$(".selectRating li").click(function() {
		$(".selectRating li").removeClass("active");	
		$(this).prevAll('li').addClass("active");	
		$(this).addClass("active");	
	});
});

$(document).ready(function() {	
	$('.clientSlider').owlCarousel({
		stagePadding: 0,
		loop:true,
		margin:30,
		nav:false,
		autoplay: true,
		smartSpeed:1000,
		autoplayTimeout:5000,
		autoplayHoverPause: true,
		items:3,
		responsive:{
        0:{
            items:1,
		 	margin:10,
        },
		479:{
            items:2,
			margin:10,
        },
        999:{
            items:3,
			margin:30,
        }}
	});
});

$(document).ready(function(){
	$("#price").ionRangeSlider({
	    min: 0, 
	    max: 3000, 
	    from: 0, 
	    prefix:"$ ",
	    step: 10,
    	onFinish: function (data) {
        	$("#postmaxprice").val($("#price").val())
    	},
	});


	$("#year").ionRangeSlider({
	    from: 0, 
	    values: ["0 year", "1 year", "2 years", "3 years", "4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11 years", "12 years"],
		onFinish: function (data) {
        	$("#maxexpirence").val($("#year").val())
    	},
	});
});


