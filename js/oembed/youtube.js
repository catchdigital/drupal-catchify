/**
 * @file
 * Behaviors to implement control over youtube video tag.
 */

'use strict';
window.video = {
  video: null,

  init: function() {
    var iframe = document.querySelector('iframe');

    // Enable js api
    var domain = window.location.origin;
    var youtubeURL = String(iframe.src);
    youtubeURL = youtubeURL + "&enablejsapi=1";
    youtubeURL = youtubeURL + `&origin=${domain}`;
    iframe.src = youtubeURL;

    // Create video instance
    if (YT.Player) {
      this.video = new YT.Player(iframe, {});
    }
  },

  pause: function () {
    if (!this.video) {
      this.init();
    }
    this.video.pauseVideo();
  },

  play: function () {
    if (!this.video) {
      this.init();
    }
    this.video.playVideo();
  },
};

window.onYouTubePlayerAPIReady = function() {
  window.video.init();
}
