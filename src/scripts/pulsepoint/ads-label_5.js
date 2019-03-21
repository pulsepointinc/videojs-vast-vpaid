'use strict';

module.exports = function(videojs) {
  var baseVideoJsComponent = videojs.getComponent('Component');
  var AdsLabel = require('../plugin/components/ads-label')(baseVideoJsComponent);
  videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));
};