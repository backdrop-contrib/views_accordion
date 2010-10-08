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

          /*
           * Fixing ajax views bug (was wrapping the div everytime), we need to check hasRan
           * It seems to work fine even with grouping enabled, though further testing couldn't hurt
           */
          // var hasRan = $(idSelector + ' ' + contentSelector).length;
          //console.log(hasRan ? idSelector + ' already ran' : idSelector + ' had not ran already');  // for debugging

          // jquery_ui accordion call
          $(displaySelector).accordion({
              header: headerSelector,
              animated: this.animated,
              //event: "mouseover"
             // navigation: true
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