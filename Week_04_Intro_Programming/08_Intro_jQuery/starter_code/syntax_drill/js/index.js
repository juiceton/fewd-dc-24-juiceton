jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
    jQuery("#purpleBox").on("click", function(){
    purplePara();
    })


    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
    jQuery("#blueBox").on("click", function(){
      bluePara();
    })

    // When the red box is clicked set the list items toggle red background and white text on and off
    jQuery("#redBox").on("click", function(){
      redList();
    })
    

    // When any of the boxes are clicked, add a 6px solid black bottom border
    jQuery(".boxes").on("click", function(){
      borderBottom();
    })
});



//change paragraph to purple
function purplePara(){
  jQuery("p").css({
    "color": "purple"
  })
};


//change paragraph to blue background, all other paragraphs should be black
function bluePara(){
  jQuery("p.hipsterSpeak").css({
    "background-color": "blue",
    "color": "white"
  })
};

//Toggle the list items with a background
function bluePara(){
  jQuery("p.hipsterSpeak").css({
    "background-color": "blue",
    "color": "white"
  })
};

//Set list to red
function redList(){
    jQuery("li").toggleClass("redForm")
  };

//Set border
function borderBottom(){
  jQuery(".boxes").css({
    "border-bottom": "solid 6px black"
  })
};


  /*.toggleClass("aClassName");
  
  .on("click", function(){});
  
  .css("propertyName", "propertyValue");*/