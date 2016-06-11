function compareValues(){
	var a = jQuery('#a').val();
	var b = jQuery('#b').val();
	if (a < b){
		jQuery('#submit').text()
	}
}

jQuery('#submit').click(compareValues);