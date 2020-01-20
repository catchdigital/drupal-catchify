// Please note that jQuery is a global dependency
import M from 'materialize-css';
import print from './components/print';

window.$ = window.jQuery;

M.AutoInit();
print($);

window.Drupal.behaviors = {
  ...window.Drupal.behaviors
};
