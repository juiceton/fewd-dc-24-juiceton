//Click to turn on and off lights
  //stop light
  document.getElementById('stopButton').onclick = illuminateRed;
  //slow light
  document.getElementById('slowButton').onclick = illuminateYellow;
  //go light
  document.getElementById('goButton').onclick = illuminateGreen;
//Turn on stop light
function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}
//Turn on slow light
function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}
//Turn on go light
function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}
//Clears lights
function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}