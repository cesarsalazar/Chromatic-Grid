$('document').ready(function(){
	
	$('#revert').hide();
	
	$('#gallery').cycle({
		fx: 'scrollHorz',
		speed: 1000,
		timeout: 0,
		next: '#next',
		prev: '#prev'
		});
	
	$('#flip').bind('click', function(){				
		$('#gallery-container').flip({
			direction: 'lr',
			content: 'This is the info',
			color: '#DDDDDD',
			onEnd: function(){
				$('#flip').hide();
				$('#revert').show();
			},
		})
	})
	
	$('#revert').click(function(){
		$("#gallery-container").revertFlip({
			onEnd: function(){
				$('#revert').hide();
				$('#flip').show();
			}
		});
	})
})