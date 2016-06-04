/*document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
*/

//click to change color
jQuery("#grayButton").on("click", function(){
  grayButton();
})

jQuery("#whiteButton").on("click", function(){
  whiteButton();
})


//change it to gray
function grayButton(){
  jQuery("body").css({
    "background-color": "gray",
    "color": "white"
  })};

//change it to white
function whiteButton(){
  jQuery("body").css({
    "background-color": "white",
    "color": "black"
  })};