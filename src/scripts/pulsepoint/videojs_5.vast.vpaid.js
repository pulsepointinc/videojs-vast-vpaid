'use strict';

module.exports = function(videojs) {
  require('./ads-label_5')(videojs);
  require('./black-poster_5')(videojs);
  var videoJsVAST = require('../plugin/videojs.vast.vpaid');
  videojs.plugin('vastClient', videoJsVAST);
};
