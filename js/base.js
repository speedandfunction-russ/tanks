$(function(){
	var castlePosition = $('.castle').first().offset().left;
	var explodeMove = 1;
	var currentFigure = '.tank';

	function moveCastle() {
		castlePosition += explodeMove;
		$('.castle').css('left', castlePosition + 'px');

	}
	function explode($bullet) {
		$bullet.animate({height: '50px', width: '50px', opacity: 0, marginTop: '-10px', borderRadius: '50%', backgroundColor: 'red', opacity: 1, marginLeft: '-50px'}, 20, function(){
			$bullet.remove();
			moveCastle();
		});
	}

	function moveFigure(direction) {

		var speed = 8;

		$figure = $(currentFigure).first();

		if (direction == 'left') {
			$figure.animate({left: '-=' + speed}, 10);
		}
		if (direction == 'right') {
			$figure.animate({left: '+=' + speed}, 10);
		}
		if (direction == 'top') {
			$figure.animate({top: '-=' + speed}, 10);
		}
		if (direction == 'bottom') {
			$figure.animate({top: '+=' + speed}, 10);
		}
	}

	document.addEventListener("keydown", function(e) {
	  if (e.keyCode == 32) {
		var $tank = $('.tank').first();
		var tankPosition = $tank.offset();
		var $bullet = $('<div class="bullet" style="left:' + (tankPosition.left + 300) + 'px;top: ' + (tankPosition.top + 40) + 'px;"></div>');
	  	$('body').append($bullet);
	  	$bullet.animate({'left': castlePosition + 'px'}, 4000, function(){
	  		explode($bullet);
	  	});
	  }
	});
	document.addEventListener("keyup", function(e) {
	  if (e.keyCode == 192) { // tab
	  	if (currentFigure === '.tank') {
	  		currentFigure = '.plane';
	  	} else {
	  		currentFigure = '.tank';
	  	}
	  }
	});
	document.addEventListener("keydown", function(e) {
	  if (e.keyCode == 13) {
		var $tank = $('.tank').first();
		var tankPosition = $tank.offset();
		var $bulletSmall = $('<div class="bullet bullet_small" style="left:' + (tankPosition.left + 220) + 'px;top: ' + (tankPosition.top + 18) + 'px;"></div>');
	  	$('body').append($bulletSmall);
	  	$bulletSmall.animate({'left': castlePosition + 'px'}, 2000, function(){
	  		explode($bulletSmall);
	  	});
	  }
	});
	document.addEventListener("keydown", function(e) {
	  if (e.keyCode == 37) {
	  	moveFigure('left');
	  }
	  if (e.keyCode == 38) {
	  	moveFigure('top');
	  }
	  if (e.keyCode == 39) {
	  	moveFigure('right');
	  }
	  if (e.keyCode == 40) {
	  	moveFigure('bottom');
	  }
	});


	document.addEventListener("keydown", function(e) {
	  if (e.keyCode == 49) {
		var $plane = $('.plane').first();
		var planePosition = $plane.offset();
		var $laser1 = $('<div class="laser" style="left:' + (planePosition.left + 52) + 'px;top: ' + (planePosition.top - 62) + 'px;"></div>');
		var $laser2 = $('<div class="laser" style="left:' + (planePosition.left + 52) + 'px;top: ' + (planePosition.top + 100) + 'px;"></div>');
	  	$('body').append($laser1);
	  	$('body').append($laser2);
		$laser1.animate({'width': '100%', opacity: 0}, 100, function(){
	  		$laser1.remove();
	  		moveCastle();
	  	});

		$laser2.animate({'width': '100%', opacity: 0}, 100, function(){
	  		$laser2.remove();
	  	});

	  }
	});

	$('.tank__button').on('click', function(){
		var $tank = $('.tank')[0].outerHTML;
		$('body').append($tank);
	});


});