// init controller
$( document ).ready(function() {
var controller = new ScrollMagic();

var tween = TweenMax.to(".technologies-boxes", 0.5, { scale: 2.5});

		// build scene
		var scene = new ScrollScene({'triggerElement': "#trigger1"})
						.setTween(tween)
						.addTo(controller);


$('.technologies-boxes').addClass('animated lightSpeedIn');

});