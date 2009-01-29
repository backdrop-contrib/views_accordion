$Id$

/* DESCRIPTION */

Views Accordion provides a display style plugin for the Views module.
It will take the results and display them as a JQuery accordion.


/* INSTALATION */

1. Place the views_accordion module in your modules directory (usually under /sites/all/modules/).
2. Go to /admin/build/modules, and activate the module (you will find it under the Views section).


/* USING VIEWS ACCORDION MODULE */

Your view must meet the following requirements:
  * Row style must be set to Fields
  * Provide at least two fields to show.

Choose Views Accordion in the Style dialog within your view, which will prompt you to configure:
  * Transition time: How fast you want the opening and closing of the sections to last for, in seconds.
    Default is half a second.
  * Start with the first row opened: Whether or not the first row of the view should start opened when the view is first shown.
    Uncheck this if you would like the accordion to start closed.

*        IMPORTANT       * 
The first field WILL be used as the header for each accordion section, all others will be displayed
when the header is clicked. The module creates an accordion section per row of results from the view.
If the first field includes a link, this link will not function, (the js returns false) Nothing will break though.
**************************


/* THEMING INFORMATION */

This module is intentionally left unstyled. Included in the module for your convenience:
  * views-acordion.css - with how the classes the author thought would be best used, mostly empty.
  * views-view-accordion.tpl.php - copy/paste into your theme directory - please the comments in this file for requirements/instructions.



/* ABOUT THE AUTHOR */

Views Accordion was created by Manuel Garcia
http://drupal.org/user/213194
