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
			content += "<form id='message'><input type='hidden' name='id' value='" + paintings.id + "'/>";
			content += '<p>';
			content += '<label for="email">Email</label>';
			content += '<input type="text" value="" name="email"/>';
			content += '<input type="submit" value="Submit"/>';
			content += '</p></form>';
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
	
	});
	
	$('#less').hide();
	
	$('#more').click(function(){
		showMeta();
	})
	
	$('#less').click(function(){
		hideMeta();
	})
	
	/*
	$('.submit').click(function(){
		$.post('/gallery', { email: "cesar@42claps.com", id: "2" });
	})
	*/
	
	$('#message').submit(function() {
		$.post('/gallery', $(this).serialize(), function(data){ alert(data); }, "text");
	  return false;
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