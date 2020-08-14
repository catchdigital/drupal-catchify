/**
 * @file
 * Behaviors to implement control over html5 video tag.
 */

'use strict';
window.video = {
  attach: function (context) {
    if (context != document) {
      return;
    }
  },

  pause: function () {
    const video = document.querySelector('video');
    video.pause();
  },

  play: function () {
    const video = document.querySelector('video');
    video.play();
  },
};
