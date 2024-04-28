// About Me content is the one by default shown
$('#educationContent').hide();
$('#publicationsContent').hide();
$('#experienceContent').hide();
$('#conferencesContent').hide();
$('#projectsContent').hide();
$('#tutorialsContent').hide();
$('#academicContent').hide();
$('#particularContent').hide();
/* Template
$('#nameContent').hide();
*/
$('#theme').hide();
$('#lan').hide();

// Hides all the divs in the particular, unless the first one
$('.particular-clickable').next().hide();
$('.particular-clickable').next()[0].style.display="block";

$(document).ready(function(){

	// First time, check the theme
	if(localStorage.getItem("theme") === null){
		localStorage.theme = "light";
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			localStorage.theme = "dark";
	}
	
	// Create the language manager
	const langManager = new LanguageManager();

	// Maybe first time or not, so load the localStorage value
	$('<link>').appendTo('head').attr({
		type: 'text/css', 
		rel: 'stylesheet',
		href: 'assets/css/light.css'
	});
	if (localStorage.theme == "dark") {
		// Handle menu
		$("link[href='assets/css/light.css']").remove();
		$('<link>').appendTo('head').attr({
			type: 'text/css', 
			rel: 'stylesheet',
			href: 'assets/css/dark.css'
		});
		$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");
	}

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
	$('#tutorials').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#tutorialsContent');
		}
	});

	// Handle 'Academic' content
	$('#academic').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#academicContent');
		}
	});

	// Handle 'Particular' content
	$('#particular').click(function(e) {

		// If the div has already the class active, no need to reload the divs...
		if(!$(e.target).hasClass('active')) {
			// Update navbar
			clearActiveLinks();
			activateLink(e);

			// Hide other contents
			clearActiveDivs();

			// Show current content
			activateDiv('#particularContent');
		}
	});

	// Handle 'Conferences' content
	// $('#conferences').click(function(e) {

	// 	// If the div has already the class active, no need to reload the divs...
	// 	if(!$(e.target).hasClass('active')) {
	// 		// Update navbar
	// 		clearActiveLinks();
	// 		activateLink(e);

	// 		// Hide other contents
	// 		clearActiveDivs();

	// 		// Show current content
	// 		activateDiv('#conferencesContent');
	// 	}
	// });

	// Handle 'Experience' content
	// $('#experience').click(function(e) {

	// 	// If the div has already the class active, no need to reload the divs...
	// 	if(!$(e.target).hasClass('active')) {
	// 		// Update navbar
	// 		clearActiveLinks();
	// 		activateLink(e);

	// 		// Hide other contents
	// 		clearActiveDivs();

	// 		// Show current content
	// 		activateDiv('#experienceContent');
	// 	}
	// });

	// Handle 'Projects' content
	// $('#projects').click(function(e) {

	// 	// If the div has already the class active, no need to reload the divs...
	// 	if(!$(e.target).hasClass('active')) {
	// 		// Update navbar
	// 		clearActiveLinks();
	// 		activateLink(e);

	// 		// Hide other contents
	// 		clearActiveDivs();

	// 		// Show current content
	// 		activateDiv('#projectsContent');
	// 	}
	// });

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
		window.open($(e.currentTarget)[0].childNodes[1].innerText, '_blank').focus();
	});

	// Whenever you clic on a clases particulares heading, you should toggle
	$('.particular-clickable').click(function(e) {
		var e = $(e.currentTarget)[0].nextElementSibling;
		if (e.style.display === "none") {
			e.style.display = "block";
		}
		else {
			e.style.display = "none";
		}
	});

	// Copy the citation to the clipboard
	// THIS SHOULD BE THE SAME FOR ALL THE PAPERS
	$(document).on("click", "#citation", function(){
		var text = $(this).parent().parent().next()[0].innerHTML;

		navigator.clipboard.writeText(text);

		toastr.success('Citation copied');
	});

	// Controls the URL; if it has '#blog'
	// then trigger the 'Blog' clic
	// if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'tutorials') {
	// 	$('#tutorials').click();
	// 	$('#tutorialsContent').focus();
	// }

	if (((window.location).href).substring(((window.location).href).lastIndexOf('#') + 1) == 'clases-particulares') {
		$('#particular').click();
		$('#particularContent').focus();
	}

	// Controls the options menu
	$('#options-toggler').click(function(e) {
		if(!$(e.currentTarget).hasClass('active')) {
			$(e.currentTarget).addClass('active');
			$('#theme').show("fast");
			$('#lan').show("fast");
		}
		else {
			$(e.currentTarget).removeClass('active');
			$('#theme').hide("fast");
			$('#lan').hide("fast");
		}
	})

	// Animates the theme button + functionality
	$('#theme').click(function(e) {
		if(localStorage.theme != "dark"){

			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb-slash'></i>");

			localStorage.theme = "dark"
			
			$("link[href='assets/css/light.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/dark.css'
			});
		}
		else {

			$('#theme').empty().append("<i class='fa-duotone fa-lightbulb'></i>");

			localStorage.theme = "light"
			
			$("link[href='assets/css/dark.css']").remove();
			$('<link>').appendTo('head').attr({
				type: 'text/css', 
				rel: 'stylesheet',
				href: 'assets/css/light.css'
			});
		}
	})

	$('#lan').click(function() {
        const newLang = langManager.getNextLanguage();
        langManager.setLanguage(newLang);
    });
});

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
	
	// Hide left panel
	if(e.target.id == "particular")
		$('#leftPanel').hide();
	else
		$('#leftPanel').show();
}

function activateDiv(divId) {
	$(divId).addClass('active');
	$(divId).show();

	// Scrolls to the content
	scrollToContent(divId);
}

function scrollToContent(divId) {
	if ($(window).width() < 751) {
		$('html, body').animate({
			scrollTop: $(divId).offset().top
		}, 1);
	}
}