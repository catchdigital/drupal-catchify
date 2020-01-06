// Please note that jQuery is a global dependency
import print from './components/print';

window.$ = window.jQuery;

print($);

window.Drupal.behaviors = {
  ...window.Drupal.behaviors
};
