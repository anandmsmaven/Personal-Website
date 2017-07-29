	// NICE SCROLL
	$(document).ready(function() {

		"use strict";

		$("#content-wrap, .cat-pages").niceScroll({
			cursorcolor: "#d7d7d7",
			cursorwidth: "6px",
			cursorborder: "none",
			cursorborderradius: "8px",
			horizrailenabled: false,
			autohidemode: false,
			zindex: 10000
		});

		$("#content-wrap, .cat-pages").getNiceScroll().show(0);

	});




	// NAVIGATION
	 $(document).ready(function() {

	 		"use strict";

		    $('a.page-scroll').on('click', function(event) {

		    	var contentWrap = $("#content-wrap");
		    	var catPages = $(".cat-pages");
		    	var sectionId = $(this).attr('href');
		    	var rmenu = $('#responsive-menu');
		    	var ascroll = $('a.page-scroll');
		        
		    	$("#content-wrap, .cat-pages").getNiceScroll().hide(0).resize();
		    	ascroll.removeClass('nav-current');
		    	$(this).addClass('nav-current');
		    	rmenu.addClass('responsive-menu');

		    	// Clearing all timers everytime event fires.
		    	clearTimeout(prr1);clearTimeout(prr2);clearTimeout(prr3);clearTimeout(prl1);clearTimeout(prl2);clearTimeout(prl3);clearTimeout(prn1);clearTimeout(prn2);
		    	clearTimeout(pll1);clearTimeout(pll2);clearTimeout(pll2);clearTimeout(plr1);clearTimeout(plr2);clearTimeout(plr3);clearTimeout(pln1);clearTimeout(pln2);
		    	clearTimeout(cf);

		    	
		    	// Show responsive menu in small devices
		    	setTimeout(function(){ 
		        	rmenu.css("opacity", "1");	
		         }, 100);

		    	if (!$(sectionId).hasClass('cat-pages-active')) {
		    		catPages.removeClass('cat-pages-active');
		    		$(sectionId).addClass('cat-pages-active');

			    	if( $(this).hasClass( "page-right" ) ) {

				        if (contentWrap.hasClass( "content-wrap-right" )) {

				        	catPages.css("z-index", "2").removeClass('cat-left-0').removeClass('cat-left-25').addClass('cat-left-50');
				        	var prr1 = setTimeout(function(){ 
					        	catPages.css("display", "none");
					        	$(sectionId).css({"display": "block", "z-index": "3"});
					        	catPages.removeClass('cat-left-50').removeClass('cat-left-0').addClass('cat-left-25');	
					         }, 300);
					        var prr2 = setTimeout(function(){ 
					        	$(sectionId).removeClass('cat-left-0').removeClass('cat-left-25').addClass('cat-left-50');
					         }, 350);
					        var prr3 = setTimeout(function(){ 
					        	$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize();	
					         }, 1300);

				        } else if (contentWrap.hasClass( "content-wrap-left" )) {
				        	catPages.removeClass('cat-left-50').removeClass('cat-left-25').addClass('cat-left-0');
				        	var prl1 = setTimeout(function(){ 
					        	catPages.css("display", "none");
					        	$(sectionId).css("display", "block");	
					         }, 1000);
					        var prl2 = setTimeout(function(){ 
					        	$(sectionId).removeClass('cat-left-50').removeClass('cat-left-0').addClass('cat-left-50');	
					         }, 1050);
					        var prl3 = setTimeout(function(){ 
					        	$("#content-wrap, .cat-pages").delay(2100).getNiceScroll().show(0).resize();	
					         }, 2000);
				        }

				        else {
				        	
				        	$(sectionId).css("display", "block");
					        var prn1 = setTimeout(function(){ 
					        	catPages.css("display", "none");
					        	$(sectionId).css("display", "block").removeClass('cat-left-0').removeClass('cat-left-25').addClass('cat-left-50').addClass('cat-pages-responsive-0');	
					         }, 1);
					        var prn2 = setTimeout(function(){ 
					        	$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize();	
					         }, 1300);
				        }

				        contentWrap.removeClass('cat-left-50').removeClass('cat-left-25').addClass('cat-left-0').removeClass("content-wrap-right").addClass("content-wrap-left");

			         } else {

			         	if (contentWrap.hasClass( "content-wrap-left" )) {

				        	catPages.removeClass('cat-left-50').removeClass('cat-left-25').addClass('cat-left-0');
				        	var pll1 = setTimeout(function(){ 
					        	catPages.css("display", "none");
					        	$(sectionId).css("display", "block");
					        	catPages.removeClass('cat-left-50').removeClass('cat-left-0').addClass('cat-left-25');	
					         }, 300);
					        var pll2 = setTimeout(function(){ 
					        	$(sectionId).removeClass('cat-left-50').removeClass('cat-left-25').addClass('cat-left-0');	
					         }, 350);
					        var pll3 = setTimeout(function(){ 
					        	$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize();	
					         }, 1300);

				        } else if (contentWrap.hasClass( "content-wrap-right" )) {
				        	catPages.removeClass('cat-left-0').removeClass('cat-left-25').addClass('cat-left-50');
				        	var plr1 = setTimeout(function(){ 
					        	catPages.css("display", "none");
					        	$(sectionId).css("display", "block");	
					         }, 1000);
					        var plr2 = setTimeout(function(){ 
					        	$(sectionId).removeClass('cat-left-50').removeClass('cat-left-25').addClass('cat-left-0');	
					         }, 1050);
					        var plr3 = setTimeout(function(){ 
					        	$("#content-wrap, .cat-pages").delay(2100).getNiceScroll().show(0).resize();	
					         }, 2000);
				        }

				        else {

					        $(sectionId).css("display", "block");
					        var pln1 = setTimeout(function(){ 
					        	$(sectionId).removeClass('cat-left-50').removeClass('cat-left-25').addClass('cat-left-0').addClass('cat-pages-responsive-0');	
					         }, 1);
					        var pln2 = setTimeout(function(){ 
					        	$("#content-wrap, .cat-pages").delay(1300).getNiceScroll().show(0).resize();	
					         }, 1300);
				        }

				        contentWrap.removeClass('cat-left-0').removeClass('cat-left-25').addClass('cat-left-50').removeClass("content-wrap-left").addClass("content-wrap-right");
			         }
		         } else {
		         	catPages.removeClass('cat-left-0').removeClass('cat-left-50').addClass('cat-left-25');
		         	contentWrap.removeClass("content-wrap-left").removeClass("content-wrap-right").removeClass('cat-left-0').removeClass('cat-left-50').addClass('cat-left-25');
		         	catPages.removeClass('cat-pages-active');
		         	ascroll.removeClass('nav-current');
		         	setTimeout(function(){ 
			        	catPages.css("display", "none");
			         }, 1000);
		         }

		         if ( sectionId !== '#contact' ) {

		        	var cf = setTimeout(function(){ 
			        	$("#contact").delay(1300).getNiceScroll().hide(0).resize();	
			         }, 1300);

		         }

		        return false;
		    });
		});




	// RESPONSIVE MENU
	$(document).ready(function() {

			"use strict";
		    $('a#responsive-menu-list').on('click', function(event) {

		    	var contentWrap = $("#content-wrap");
		    	var rmenu = $('#responsive-menu').find('ul');

		    	clearTimeout(timeouts);
		        
		    	if( rmenu.hasClass('responsive-menu-disable')) {

				        rmenu.removeClass('responsive-menu-disable').css("display", "block");

			        } else {
			        	rmenu.addClass('responsive-menu-disable').css("display", "none");
			        }

		        var timeouts = setTimeout(function(){ 
		        	contentWrap.css("display", "none").css("visible", "hidden");
		         }, 1050);


		        return false;
		    });
		});

	 $(document).ready(function() {

	 	    "use strict";

		    $('a.page-scroll-responsive').on('click', function(event) {
		        
		    	var contentWrap = $("#content-wrap");
		    	var catPages = $(".cat-pages");
		    	var sectionId = $(this).attr('href');
		    	var rmenu = $('#responsive-menu');
		    	var rmenul = rmenu.find('ul');
		    	var contact = $('#contact');
		    	var ascroll = $('a.page-scroll');

		    	clearTimeout(timeout1);clearTimeout(timeout2);clearTimeout(timeout3);clearTimeout(timeout4);clearTimeout(timeout5);	    	

		    	$("#content-wrap, .cat-pages").getNiceScroll().hide(0);
		    	rmenul.addClass('responsive-menu-disable').css("display", "none");
		    	var timeout1 = setTimeout(function(){ 
		        	contact.css("visibility", "visible");
		         }, 1000);
		    	

		    	catPages.removeClass('cat-pages-responsive-0').addClass('cat-pages-responsive-100');	
		    	 var timeout2 = setTimeout(function(){ 
		        	catPages.css("display", "none");	
		        	$(sectionId).css("display", "block");
		         }, 1000);
		         var timeout3 = setTimeout(function(){ 
		         	contentWrap.removeClass('content-wrap-left').removeClass('content-wrap-right');
		        	$(sectionId).removeClass('cat-pages-responsive-100').addClass('cat-pages-responsive-0');
		         }, 1050);
		         var timeout4 = setTimeout(function(){ 
		        	$("#content-wrap, .cat-pages").delay(2000).getNiceScroll().show(0).resize();	
		         }, 2100);


		         if ( sectionId === '#content-wrap' ) {

		         	 rmenu.css("opacity", "0");

		         	catPages.removeClass('cat-pages-active');
		         	ascroll.removeClass('nav-current');

			    	var timeout5 = setTimeout(function(){ 
			        	rmenu.removeClass('responsive-menu');
			         }, 1100);

		         }
		             
		        return false;
		    });
		});




	 // DROPDOWN MENU

	 $(document).ready(function() {

	 	"use strict";

	 	if ( $('.menu ul li ul').length ) {
	 		
	 		$('.menu ul li ul').closest('li').addClass('sub-menu');
	 	}

		 $('.menu ul li').hover(
		     function () {
				$(this).find('ul').css('visibility', 'visible');
		     }, 
		     function () {
				$(this).find('ul').css('visibility', 'hidden');
		     }
		 	);
	 });

	 // SKIILS
	 $(document).ready(function() {
	 	"use strict";

        $(".dial").knob({
        	'width': '100',
        	'height': '100',
        	'thickness': .05,
        	'fgColor': 'rgba(255, 255, 255, .6)',
        	'bgColor': 'rgba(255, 255, 255, .4)',
        	'inputColor': '#fff',
        	'readOnly': true,
        	'font': '28px "Poiret One"',
        	'fontWeight': "300",
        	 parse: function (v) {return parseInt(v, 10);},
             format: function (v) {return v + "%";}
        });
    });




	 // TIMELINE

	 $(document).ready(function() {

	 	"use strict";

		 $('.timeline ul li').hover(
		     function () {

				$('.timeline ul li').not(this).css("opacity", ".5");
				$('span', this).addClass('changed');

		     }, 
		     function () {

		     	$('.timeline ul li').css("opacity", "1");
		     	$('span', this).removeClass('changed');

		     }
		 	);
	 });
		
		 // GOOGLE MAP
		 $(document).ready(function() {

		 	"use strict";

		    var contact = $('#contact');

		    $('li#contact-link a').on('click', function(event) {

		    	contact.css("z-index", "1");

		    	if( $(this).parent().hasClass( "page-right" )) {

				        contact.css("visibility", "visible");

			        } else if ($('#content-wrap').css("left", "25%")) {

			        	contact.css("visibility", "visible");

			        } else {
			        	setTimeout(function(){ 
			        		
				        	contact.css("visibility", "visible");
				         }, 500);
			        }
		        
		    });

		    $('a.contact-button').on('click', function(event) {

	    		contact.css("z-index", "1");

	        	setTimeout(function(){ 
	        		
		        	contact.css("visibility", "visible");
		         }, 800);
		        
		    });

		    $('a[href="#contact"]').on('click', function(event) {
			      contact.css("z-index", "1");
			});
		});




		 // VALIDATE CONTACT FORM
		$(document).ready(function() {

			"use strict";

		    $('#contactform').validate({
		        rules: {
		            name: {
		                required: true,
		                minlength: 2
		            },
		            email: {
		                required: true,
		                email: true
		            },
		            subject: {
		                required: true,
		            },
		             message: {
		                required: true
		            }
		        },
		        messages: {
		            name: {
		                required: "Please Enter Your Name",
		                minlength: "your name must consist of at least 2 characters"
		            },
		            email: {
		                required: "Please Enter Your Email Address"
		            },
		            subject: {
		                required: "Please Enter Your Message Subject"
		            },
		            message: {
		                required: "Please Enter Your Message.",
		                minlength: "Your Message Is Too Long!"
		            },
		        },
		         submitHandler: function(form) {
                     var form = $(form);
		        	
		             $(form).ajaxSubmit({
		                type:"POST",
		               data: $(form).serialize(),
		               url:"mail.php",
		                success: function() {
		                     $('#contactform').clearForm();
		                    $('#cf-success').css("display", "block").css("opacity", "1");
		                },
		                error: function() {
		                   $('#cf-error').css("display", "block").css("opacity", "1");
		                }
		             });
		         }
		    });
		});