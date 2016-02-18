var loadPromotionalPopIn = function(url) {
	$(window).load(function(){
		$.get(url, function(result) {
			var fadeBox = $('<div class="fade-box"></div>').css({
			'opacity': 0,
			'height': $(document).height()
			});
			var popIn = $('<div class="pop-in"></div>').hide();
			var popInContent = $('<div class="content">').prependTo(popIn);
			var closeButton = $('<a href="#" class="close-pop-in">Fermer</a>').prependTo(popIn);
			popInContent.html(result);
			popIn.prependTo($('body'));
			fadeBox.prependTo($('body'));
			
			var dimensions = { width : popIn.width(), height: popIn.height() };
			
			popIn.css({
				'top': $(window).scrollTop() + ($(window).height() / 2),
				'left': ($(window).width()) / 2,
				'width':0,
				'height':0
			});
			popInContent.hide().css('visibility', 'hidden');
			
			fadeBox.fadeTo(500, 0.7, function(evt) {
					
				popIn.show().animate({
					'left': ($(window).width() - dimensions.width) / 2,
					'top': ($(window).height() > dimensions.height) ? $(window).scrollTop() + ($(window).height() - dimensions.height) / 2 : $(window).scrollTop() + 15,
					'width' : dimensions.width,
					'height': dimensions.height
				}, 750, function() {
					popInContent.css('visibility','').fadeIn(500);
				});
				closeButton.click(function(evt) {
					popIn.fadeOut(500);
					fadeBox.fadeOut(500, function() {
						popIn.remove();
						fadeBox.remove();
					});
				});
			});
		});
	});
}