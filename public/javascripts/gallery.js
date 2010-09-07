$(function(){
	
	$.getJSON("/data/paintings.js", function(paintings){
		var content;
		$.each(paintings, function(i, paintings){
			i = i + 1;
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
			fx: 'scrollHorz',
			speed: 2000,
			timeout: 0,
			next: '#next',
			prev: '#prev'
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