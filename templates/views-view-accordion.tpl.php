<?php
/**
 * @file
 * Displays the items of the accordion.
 *
 * @ingroup views_templates
 *
 * Note that the accordion NEEDS <?php print $row ?> to be wrapped by an
 * element, or it will hide all fields on all rows under the first field.
 *
 * Also, if you use field grouping and use the headers of the groups as the
 * accordion headers, these NEED to be inside h3 tags exactly as below
 * (though you can add classes).
 *
 * The current div wrapping each row gets two css classes, which should be
 * enough for most cases:
 *     "views-accordion-item"
 *      and a unique per row class like item-0
 */
?>
<?php if (!empty($title)): ?>
  <h3 class="<?php print $view_accordion_id; ?>">
    <?php print $title; ?>
  </h3>
<?php endif; ?>
<?php if ($use_group_header): ?><div><?php endif; ?>
  <div class="<?php print implode(' ', $classes); ?>">
    <?php if (isset($header)): ?>
      <div class="view-header">
        <?php print $header; ?>
      </div>
    <?php endif; ?>
  
    <?php if (isset($exposed)): ?>
      <div class="view-filters">
        <?php print $exposed; ?>
      </div>
    <?php endif; ?>
  
    <?php if (isset($attachment_before)): ?>
      <div class="attachment attachment-before">
        <?php print $attachment_before; ?>
      </div>
    <?php endif; ?>
  
    <?php if ($rows): ?>
      <div class="view-content">
        <?php foreach ($rows as $id => $row): ?>
          <div class="views-accordion-item item-<?php print $id; ?>">
            <?php print $row; ?>
          </div>
        <?php endforeach; ?>
      </div>
    <?php elseif ($empty): ?>
      <div class="view-empty">
        <?php print $empty; ?>
      </div>
    <?php endif; ?>
  
    <?php if (isset($pager)): ?>
      <?php print $pager; ?>
    <?php endif; ?>
  
    <?php if (isset($attachment_after)): ?>
      <div class="attachment attachment-after">
        <?php print $attachment_after; ?>
      </div>
    <?php endif; ?>
  
    <?php if (isset($more)): ?>
      <?php print $more; ?>
    <?php endif; ?>
  
    <?php if (isset($footer)): ?>
      <div class="view-footer">
        <?php print $footer; ?>
      </div>
    <?php endif; ?>
  
    <?php if (isset($feed_icon)): ?>
      <div class="feed-icon">
        <?php print $feed_icon; ?>
      </div>
    <?php endif; ?>
  
  </div><?php /* class view */ ?>
<?php if ($use_group_header): ?></div><?php endif; ?>
