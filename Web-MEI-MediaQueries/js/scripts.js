$(document).ready(function () {

		$('a.faqs').click(function() {
			elemento = $(this).attr('id');
			elemento = "."+elemento;
			$(elemento).slideToggle();
			return false;
		});

		$('.m1').click(function() { return false; });
		$('.m2').click(function() { return false; });
		$('.m3').click(function() { return false; });
		$('.m4').click(function() { return false; });


		$('.m1').mouseover(function() { $('.modulo1 a').addClass('destacado'); });
		$('.m1').mouseout(function() { 	$('.modulo1 a').removeClass('destacado'); });

		$('.m2').mouseover(function() { $('.modulo2 a').addClass('destacado'); });
		$('.m2').mouseout(function() { 	$('.modulo2 a').removeClass('destacado'); });

		$('.m3').mouseover(function() { $('.modulo3 a').addClass('destacado'); });
		$('.m3').mouseout(function() { 	$('.modulo3 a').removeClass('destacado'); });

		$('.m4').mouseover(function() { $('.modulo4 a').addClass('destacado'); });
		$('.m4').mouseout(function() { 	$('.modulo4 a').removeClass('destacado'); });

		$(".video").click(function() {
				$.fancybox({
					'padding'       : 0,
					'autoScale'     : false,
					'transitionIn'  : 'none',
					'transitionOut' : 'none',
					'title'         : this.title,
					'width'         : 640,
					'height'        : 385,
					'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
					'type'          : 'swf',
					'swf'           : {
					'wmode'             : 'transparent',
					'allowfullscreen'   : 'true'
					}
				});
				return false;
		});



		$('.asignatura').jPanel({
				'effect'	: 'slide',
				'speed'		: 'fast',
				'easing'	: 'linear'
		});

		$('.expandir').jPanel({
				'effect'	: 'slide',
				'speed'		: 'fast',
				'easing'	: 'linear'
		});

		jQuery.fn.mailto = function() {
			return this.each(function(){
				var email = $(this).html().replace(/\s*\(.+\)\s*/, "@");
				$(this).before('<a href="mailto:' + email + '" rel="nofollow" title="Enviar correo a ' + email + '" class="email">' + email + '</a>').remove();
			});
		};

		$('.email').mailto();

		$('a.faqPrincipal').click(function() { $.smoothScroll({ scrollTarget:'#faq', speed:700, easing: 'easeInOutExpo' }); });

		$('#menu a.btnSeccion').click(function() {
			$('#menu a').removeClass('pulsado');
			$(this).addClass('pulsado');
			id = $(this).attr('href');
        	$.smoothScroll({
                    scrollTarget: id,
                    speed: 700,
                    easing: 'easeInOutExpo',
                    afterScroll: function() {}
                });
       		return false;
    	});

});
