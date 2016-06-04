//Turn the lights off and on
//stop light
jQuery("#stopButton").on("click",function(){
  clearLights();
  stopButton();
});
//slow light
jQuery("#slowButton").on("click",function(){
  clearLights();
  slowButton();
});
//go light
jQuery("#goButton").on("click",function(){
  clearLights();
  goButton();
});


//Turn on stop light
function stopButton(){
  jQuery("#stopLight").css("background-color", "red");
}
//Turn on slow light
function slowButton(){
  jQuery("#slowLight").css("background-color", "yellow");
}
//turn on go light
function goButton(){
  jQuery("#goLight").css("background-color", "green");
}
//clear lights
function clearLights() {
  jQuery(".bulb").css("background-color", "black");
}