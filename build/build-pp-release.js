'use strict';

var gulp         = require('gulp');
var release      = require('node-release');
var deployTool   = require('node-release-deploy').DeployTool;
var runSequence  = require('run-sequence');

gulp.task('pp-release', function() {
  return release.perform({
    projectPath: deployTool.projectPath(),
    debug: true,
    buildPromise: function () {
        return deployTool.toPromise(function (c) {
            runSequence(['clean', 'build'], c);
        });
    },
    postReleasePromise: function () {
        return deployTool.forProject().withGroupId('com.mailonline.videojs').mavenDeployAndNexusUpload('dev');
    },
  });
});
