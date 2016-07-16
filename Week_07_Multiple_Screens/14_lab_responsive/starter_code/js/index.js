jQuery(document).ready(function(){
  jQuery('#nav-ham').click(changeHamburger)
});

function changeHamburger() {
	event.preventDefault;
	jQuery('#targetNav').toggleClass();
//	jQuery('#targetNav').addClass('.postChange');
	console.log('Huh');
//	jQuery('.vert-nav').addClass('.postChange');
	
	jQuery('#targetNav').css({
		'color': 'white',
		'font-size': '22px',
		'text-align': 'center',
		'max-width': '100%',
	});
}