var painting = 1; 
var noOfPaintings = 0;

$(function(){
	
	$.getJSON("/data/paintings.js", function(paintings){
		var content;
		$.each(paintings, function(i, paintings){
			i = i + 1;
			noOfPaintings = i;
			content +=	"<div class='painting'>" +
								 	"<img src='" + paintings.url + "'/>" +
								 	"<div class='meta' id='meta"+ i +"'>" +
								 	"<p>" + paintings.name + "</p>" +
									"<p>" + paintings.description + "</p>" +
			 						"<p>" +
			 						"<label for='email'>Email</label>" +
			 						"<input id='email' type='text' name='email'/>" +
		 							"<input id='id' type='hidden' name='id' value='" + paintings.id + "'/>" +
									"<button class='submit'>Submit</button>" +
		 							"</p>" +
									"</div></div>"; 
			$(content).appendTo('#gallery');
			content = "";
		}),
		
		$('#gallery').cycle({
			startingSlide: currentPainting(false),
			fx: 'scrollHorz',
			speed: 2000,
			timeout: 0,
			next: '#next',
			prev: '#prev',
			containerResize: 1
		});
		
		$('.meta').hide();
		
		$('.submit').click(function() {
			email = $(this).siblings('#email').val();
			id = $(this).siblings('#id').val();			
			$.post('/gallery', {'email':email, 'id':id}, function(data){ hideMeta(); }, "text");
			return false;
		});
	
	});
	
	$('#less').hide();
	
	$('#more').click(function(){
		showMeta();
	})
	
	$('#less').click(function(){
		hideMeta();
	})
	
	$('#next').click(function(){
		currentPainting(1);
	})
	
	$('#prev').click(function(){
		currentPainting(-1);
	})
	
	positionGallery();
	
	$(window).resize(function(){
		positionGallery();
	});
	
})

var hideMeta = function(){
	$('.meta').hide();
	$('#less').hide();
	$('#more').show();
	$('#next').show();
	$('#prev').show();
}

var showMeta = function(){
	$('.meta').show();
	$('#more').hide();
	$('#less').show();
	$('#next').hide();
	$('#prev').hide();
	
}

var positionGallery = function(){
	
	var footerHeight = 30;
	var minHeight = 500;
	var footerTop = $(window).height() - footerHeight;
	var galleryTop = footerTop - minHeight - 50;
		
	$('#gallery').css('width', '100%');
	$('.painting').css('width', '100%');

	$('#gallery').cycle('destroy').cycle({
		startingSlide: currentPainting(false),
		fx: 'scrollHorz',
		speed: 2000,
		timeout: 0,
		next: '#next',
		prev: '#prev',
		containerResize: 1
	});

	if(footerTop > minHeight){
		$('#footer').css('top', footerTop + 'px');
	}
	
	if(galleryTop > 0){
		$('#gallery').css('top', galleryTop + 'px');
	}	
}

var currentPainting = function(change){
	
		if(0 < painting < noOfPaintings){
			painting += change;	
		}
		else if(painting < 0){
			painting == noOfPaintings;
		}
		else{
			painting = 0;
		}
		console.log("Painting: " + painting);
		return painting;
}
