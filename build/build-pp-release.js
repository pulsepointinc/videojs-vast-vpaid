'use strict';

var gulp         = require('gulp');
var deployTool   = require('node-release-deploy').DeployTool;

gulp.task('pp-release', function() {
  return deployTool.forProject().withGroupId('com.mailonline.videojs-vast-vpaid').mavenDeployAndNexusUpload('bin');
});
