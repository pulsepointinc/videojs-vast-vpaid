'use strict';

module.exports = function(videojs) {
  var baseVideoJsComponent = videojs.getComponent('Component');
  var BlackPoster = require('../plugin/components/black-poster')(baseVideoJsComponent);
  videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));
};