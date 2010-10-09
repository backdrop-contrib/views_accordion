// $Id$
Drupal.behaviors.views_accordion =  {
  attach: function(context) {
    if(Drupal.settings.views_accordion){
      (function ($) {
        $.each(Drupal.settings.views_accordion, function(id) {
          /*
           * Our view settings
           */
          var usegroupheader = this.usegroupheader;
          // the selectors we have to play with
          var displaySelector = '.view-id-'+ this.viewname +'.view-display-id-'+ this.display +' .view-content';
          var headerSelector = usegroupheader ? (this.header) : ('.' + this.header); // this.header is the class of our first field

          // Prepare our markup for jquery ui accordion
          $(headerSelector).each(function(){
            var $this = $(this);
            // if the header is not already using an anchor tag, add one
            if($this.find('a').length == 0){
              $this.wrapInner('<a href="#"></a>');
            }
            // Wrap the accordion content within a div if necessary
            if (!usegroupheader) {
               $(this).siblings().wrapAll('<div></div');
             }
          });

          // jquery_ui accordion call
          $(displaySelector).accordion({
              header: headerSelector,
              animated: this.animated,
              active: this.rowstartopen,
              collapsible: this.collapsible,
              autoHeight: this.autoheight,
              event: this.event,
              fillSpace: this.fillspace,
              navigation: this.navigation,
              clearstyle: this.clearstyle,
          });
        });
      })(jQuery);
    }
  }
};