<?php
// $Id$
/**
 * @file
 * Displays the items of the accordion.
 *
 * @ingroup views_templates
 *
 *  Note that the accordion NEEDS <?php print $row ?> to be wrapped by an element, or it will hide all fields on all rows under the first field.
 *
 *  The current div wraping each row gets two css classes, which should be enough for most cases:
 *     "views-accordion-item"
 *      and a unique per row class like item-0
 *
 */
?>
<div class="item-list views-accordion <?php print $views_accordion_id ?>">
  <div id="<?php print $views_accordion_id ?>">
    <?php foreach ($rows as $key => $row): ?>
      <div class="views-accordion-item item-<?php print $key ?>"><?php print $row ?></div>
    <?php endforeach; ?>
  </div>
</div>
