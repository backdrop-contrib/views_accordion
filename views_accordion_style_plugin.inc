<?php
// $Id$
/**
 * @file
 * Provide an accordion style plugin for Views. This file is autoloaded by views.
 */

/**
  * Implementation of views_plugin_style().
  */
class views_accordion_style_plugin extends views_plugin_style {
  /**
   * Set default options
   */
  function options(&$options) {
    $options['speed'] = 0.5;
    $options['first-open'] = 1;
  }

  function options_form(&$form, &$form_state) {
    $form['speed'] = array(
      '#type' => 'textfield',
      '#title' => t('Transition time'),
      '#size' => 5,
      '#maxlength' => 5,
      '#default_value' => $this->options['speed'],
      '#required' => TRUE,
      '#element_validate' => array('accordion_speed_value_validate'),
      '#description' => t('The time in seconds to open-close sections. If you would like it to be instanteneous, enter 0.001'),
      '#prefix' => '<div class="form-item">'. t('<strong>IMPORTANT:</strong> The <em>first field</em> in order of appearance <em>will</em> be the one used as the "header" or "trigger" of the accordion action. Please see the <a href="/admin/help/views_accordion">help</a> for further information.') .'</div>',
    );
    $form['first-open'] = array(
      '#type' => 'checkbox',
      '#title' => t('Start with the first row opened'),
      '#default_value' => $this->options['first-open'],
      '#description' => t('Whether or not you would like the accordion to start with the first row opened'),
    );
  }
}

/**
  * Validates the options entered
  */
function accordion_speed_value_validate($element, &$form_state) {
  /* dont allow commas */
  if (strstr($element['#value'], ',')) {
    form_error($element, t('Please use a "." instead of a "," in the <em>') . $element['#title'] . t('</em> field.'));
  }
  /* must be higher than 0 */
  if ($element['#value'] <= 0) {
    form_error($element, ('<em>'. ($element['#title'] . t('</em> must be higher than 0.<br />If you would like it to be instanteneous, enter 0.001'))));
  }
}
