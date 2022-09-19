$(document).ready(function(){

	$('#return').click(function(e) {
		var backURL = window.location.origin + "#blog";
		window.location = backURL;
	});

});