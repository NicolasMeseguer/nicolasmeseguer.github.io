// About Me content is the one by default shown
$('#educationContent').hide();
$('#publicationsContent').hide();
$('#experienceContent').hide();
$('#conferencesContent').hide();
$('#projectsContent').hide();
$('#blogContent').hide();
/* Template
$('#nameContent').hide();
*/

var mobileVersion;

$(document).ready(function(){

	$.getJSON("https://api.countapi.xyz/hit/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a", function(response) {
		$("#contadorVisitas").text(response.value);
	});

	// Handle 'About Me' content
	$('#aboutme').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#aboutmeContent');
		}

	});

	// Handle 'Education' content
	$('#education').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#educationContent');
		}
	});

	// Handle 'Publications' content
	$('#publications').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#publicationsContent');
		}
	});

	// Handle 'Blog' content
	$('#blog').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#blogContent');
		}
	});

	// Handle 'Conferences' content
	$('#conferences').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#conferencesContent');
		}
	});

	// Handle 'Experience' content
	$('#experience').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#experienceContent');
		}
	});

	// Handle 'Projects' content
	$('#projects').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#projectsContent');
		}
	});

	/*
	// Handle 'Template' content
	$('#name').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#nameContent');
		}
	});
	*/

	// Whenever you clic on a blog post, you should be redirected to that post' html
	$('.clickable').click(function(e) {
		var blogPostURL = window.location.origin + "/blog/" + $(e.currentTarget)[0].childNodes[1].innerText;
		
		window.location = blogPostURL;
	});

	// Copy the citation to the clipboard
	// THIS SHOULD BE THE SAME FOR ALL THE PAPERS
	$(document).on("click", "#citation", function(){
		var text = $(this).parent().parent().next()[0].innerHTML;

		navigator.clipboard.writeText(text);

		toastr.success('Citation copied');
	});

	// Sanity check, so we dont have to wait until a resize event
	if( $(window).width() < 751 )
		downscalePage();

	// Control the window size
	$(window).resize(function() {
		if( $(window).width() < 751 ) {

			// Downscales the page
			downscalePage();
		}
		else if($(window).width() >= 751 ) {

			// Upscales the page
			upscalePage();
		}
	  });

	// Controls the URL; if it has '#blog'
	// then trigger the 'Blog' clic
	if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'blog') {
		$('#blog').click();
	}

});

function downscalePage() {
	// Centers the profile picture in mobile's view
	if(!$('#nicolasmeseguerpicture').hasClass('mx-auto')) {
		$('#nicolasmeseguerpicture').addClass('mx-auto');
		$('#nicolasmeseguerpicture').removeClass('me-auto');
	}

	// Center the h4 "Hobbies" for mobile's view
	if(!$('#hobbiesH4').hasClass('text-center')) {
		$('#hobbiesH4').addClass('text-center')
	}

	// Center each of the hobbies divs
	if(!$('#hobbie1').hasClass('text-center')) {
		$('#hobbie1').addClass('text-center mt-2')
		$('#hobbie2').addClass('text-center mt-2')
		$('#hobbie3').addClass('text-center mt-2')
	}

	mobileVersion = true;
}

function upscalePage() {
	if(!$('#nicolasmeseguerpicture').hasClass('me-auto')) {
		$('#nicolasmeseguerpicture').addClass('me-auto');
		$('#nicolasmeseguerpicture').removeClass('mx-auto');
	}

	if($('#hobbiesH4').hasClass('text-center')) {
		$('#hobbiesH4').removeClass('text-center')
	}

	if($('#hobbie1').hasClass('text-center')) {
		$('#hobbie1').removeClass('text-center mt-2')
		$('#hobbie2').removeClass('text-center mt-2')
		$('#hobbie3').removeClass('text-center mt-2')
	}

	mobileVersion = false;
}

function clearActiveLinks() {
	$('#navbarList .nav-item .nav-link').each(function() {
		$(this).removeClass('active');
	});
}

function clearActiveDivs() {
	$('.container .content .active').each(function() {
		$(this).removeClass('active');
		$(this).hide();
	});
}

function activateLink(e) {
	$(e.target).addClass('active');
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();

	// Scrolls to the content
	scrollToContent(divId);
}

function scrollToContent(divId) {
	if (mobileVersion) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}

function resetViews() {
	$.getJSON("https://api.countapi.xyz/set/nicolasmeseguer.github.io/634c2142-b35d-430e-b51c-dad16880dd3a?value=0", function(response) {
		$("#contadorVisitas").text("0");
	});
}