//Click on Gray button
document.getElementById("grayButton").onclick = changeToGray;
  //call changeToGray


//Click on the White button
document.getElementById("whiteButton").onclick = changeToWhite;
  //call changeToWhite


function changeToGray(){
  //Change the background color
  document.body.style.backgroundColor = "gray";
  //Change the text color
  document.body.style.color = "white";
  //console.log("I'm gray.");
} //end changeToGray


function changeToWhite(){
  //Change the background color
  document.body.style.backgroundColor = "white";
  //Change the text color
  document.body.style.color = "black";
  //console.log("I'm white.");
} //end changeToWhite

  