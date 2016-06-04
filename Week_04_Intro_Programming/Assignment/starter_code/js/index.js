//Allow page to load
jQuery(document).ready(function(){
  //Click event on "Read More"
  jQuery('.readmore').click(function(event){
    //Prevent from opening link
    event.preventDefault();
    //Expand the div
    jQuery('#show-this-on-click').slideDown();
    //Hide 'Read More'
    //jQuery('.readless, .hide').removeClass();
    //Hide 'Read less'
    jQuery('.readmore').hide();
    //Show 'Read less'
    jQuery('.readless').show();
  });

  //Click event to show Read less
  jQuery('.readless').click(function(event){
    //Prevent default
    event.preventDefault();
    //Slides div back up
    jQuery('#show-this-on-click').slideUp();
    //Hides read less
    jQuery('.readless').hide();
    //Shows read more
    jQuery('.readmore').show();
  });
  
  
  jQuery('.learnmore').click(function(event){
    event.preventDefault();
    jQuery('#learnmoretext').slideDown();
  });
  //Click event 
});

