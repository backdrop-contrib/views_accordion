
Drupal.behaviors.views_accordion = function(context) {
  
  $.each(Drupal.settings.views_accordion, function(id) {
    var $activeClass = 'accordion-header-active'; // the CSS class that the active header will recieve when it's open
    var $hoverClass = 'accordion-header-hover'; // the CSS class that the headers will recieve when the mouse goes over
    var $contentClass = 'accordion-content'; // the CSS class that the content in the accordions will have
    var $speed = this.speed;
    var $triggers = $('#' + id + ' div.views-field-' + this.header); // this.header is the name of our first field
    $triggers.addClass('accordion-header');
    $triggers.parent().each(function(){
      $(this).children().slice(1).wrapAll('<div class="' + $contentClass + '">') // we wrap all but the header in a div, and hide it.
    });
              
    var $content = $('#' + id + ' div.' + $contentClass).hide();;

    $triggers.click(function() {
      var $ourTrigger = $(this);
      var $ourContent = $(this).next();
     
      $triggers.removeClass($activeClass);
      // if the one we clicked is open
      if ($ourContent.is(":visible")) { 
       $ourContent.slideUp($speed);
      }
      // otherwise
      else {
        // if we have one open, close it
        var $visibleContent = $content.filter(':visible');
        if($visibleContent.length) {
          $triggers.removeClass($activeClass);
          $visibleContent.slideUp($speed);
        }
        // open our section
        $ourContent.slideToggle($speed);
        $(this).toggleClass($activeClass);
      }
      return false;
    });
    
    $triggers.hover(function(){
      // on mouse over
      $(this).addClass($hoverClass);
      },function(){
          // on mouse out
          $(this).removeClass($hoverClass);
        });
        
    if (this.firstopen) {
      $triggers.filter(':first').addClass($activeClass).parent().children().show();
    }
  });
}
