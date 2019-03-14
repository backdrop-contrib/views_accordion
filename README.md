# ![Views Accordion](https://github.com/backdrop-contrib/views_accordion/blob/1.x-1.x/images/views_accordion.png "Views Accordion for BackdropCMS")

Views Accordion provides a display style plugin for the Views module.
It will take the results and display them as a jQuery UI accordion. It supports
grouping of fields and ajax pagination.

## Installation

- Install this module using the 
[official Backdrop CMS instructions](https://backdropcms.org/guide/modules).

## Configuration and Usage

Your view must meet the following requirements:
  * Row style must be set to Fields
  * Provide at least two fields to show.

Choose `Views Accordion` in the Style dialog within your view, which will prompt
you to configure the accordion.

**Important Note:**
The first field WILL be used as the header for each accordion section, all
others will be displayed when the header is clicked. The module creates an
accordion section per row of results from the view. If the first field includes
a link, this link will not function (the `js` will return false). Nothing will 
break but you should be aware that this will happen.

More details may be found (or added) in the 
[Wiki](https://github.com/backdrop-contrib/views_accordion/wiki)

## Issues

Bugs and Feature requests should be reported in the
[Issue Queue](https://github.com/backdrop-contrib/views_accordion/issues)

## Current Maintainers

- [Laryn Kragt Bakker](https://github.com/laryn), [CEDC.org](https://CEDC.org) 

## Credits

- Ported to Backdrop by [Laryn Kragt Bakker](https://github.com/laryn), [CEDC.org](https://CEDC.org)
- Created and maintained for Drupal by [Manuel Garcia](http://drupal.org/user/213194)

## License

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.
