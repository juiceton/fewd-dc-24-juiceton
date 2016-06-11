//Start with lights on
var lights = "on";

function switchLights() {
  //If lights are on
  if(lights == "on"){
    //Turn dark, add dark class
    jQuery('body').addClass('dark');
    //Tell that lights are off
    lights = "off";
  }
  else {
  //If lights are off
  //Turn light, remove dark class
		jQuery('body').removeClass('dark');
  //Tell that the lights are on
		lights = "on";
  }

}


jQuery('#light_switch').click(switchLights);
