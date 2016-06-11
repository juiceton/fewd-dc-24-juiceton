//Ready, delays JS until page loads
jQuery(document).ready(function() {
	jQuery('#submit-btn').click(function(){
		//Prevent link
		event.preventDefault();
		//Variable for user input, val
		var formSubmit = jQuery('#city-type').val();
		//Get variable
		jQuery('#city-type').val();
		//Change variable to LC and trim
		formSubmit = formSubmit.toLowerCase().trim();
		//Result if LA is submitted
		if(formSubmit == 'los angeles' || formSubmit == 'la') {
			//Change body
			document.body.style.backgroundImage="url('images/la.jpg')";
		}
		//Result if SF is submitted
		else if(formSubmit == 'sf' || formSubmit == 'san francisco' || formSubmit == 'san fran') {
			document.body.style.backgroundImage="url('images/sf.jpg')";
		}
		//Result if NYC is submitted
		else if(formSubmit == 'ny' || formSubmit == 'new york' || formSubmit == 'new york city') {
			document.body.style.backgroundImage="url('images/nyc.jpg')";
		}
		//Result if ATX is submitted
			else if(formSubmit == 'austin' || formSubmit == 'atx') {	document.body.style.backgroundImage="url('images/austin.jpg')";
		}
		//Result if SYD is submitted
					else if(formSubmit == 'sydney') {	document.body.style.backgroundImage="url('images/sydney.jpg')";
		}
	});	
});




