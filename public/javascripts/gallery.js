$(function(){
	
	$.getJSON("/data/paintings.js", function(paintings){
		var content;
		$.each(paintings, function(i, paintings){
			i = i + 1;
			content += "<div class='painting'>";
			content += "<img src='" + paintings.url + "'/>";
			content += "<div class='meta' id='meta"+ i +"'>";
			content += "<p>" + paintings.name + "</p>";
			content += "<p>" + paintings.description + "</p>";
			content += '<p>';
			content += "<label for='email'>Email</label>";
			content += "<input id='email' type='text' name='email'/>";
			content += "<input id='id' type='hidden' name='id' value='" + paintings.id + "'/>";
			content += "<button class='submit'>Submit</button>";
			content += "</p>";
			content += "</div></div>"; 
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
			
			console.log("Email:" + email + "ID" + id);
			
			$.post('/gallery', {'email':email, 'id':id}, function(data){ alert(data); }, "text");
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