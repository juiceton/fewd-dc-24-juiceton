var score = 0;


function clickFive(){
	score = score + 5;
	console.log(score)
	jQuery('#result').text(score);
}

function clickTen(){
	score = score + 10;
	console.log(score)
	jQuery('#result').text(score);
}

function clickSubOne(){
	score = score - 1;
	console.log(score)
	jQuery('#result').text(score);
}

function resetZero(){
	score = 0;
	jQuery('#result').text(score);
}


jQuery('#add5').click(clickFive);
jQuery('#add10').click(clickTen);
jQuery('#sub1').click(clickSubOne);
jQuery('#zero').click(resetZero);