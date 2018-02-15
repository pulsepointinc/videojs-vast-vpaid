'use strict';

var gulp         = require('gulp');
var deployTool   = require('node-release-deploy').DeployTool;

/**
 * Git release has issues with permissions, hence releasing only to our Nexus repo.
 * gulp build - task produces the prod artifacts under `bin` directory.
 * Please ensure that you set the node env to `production` before running `gulp build` statement.
 *
 * Once the artifacts are built, update the package.json file to the release version you want, and then
 * run this task - `gulp pp-release`. This task will simply upload the artifacts to maven, with the version
 * specified in `package.json`. Attempting to release the same version to Nexus will result in 400 error code.
 */
gulp.task('pp-release', function() {
  return deployTool.forProject().withGroupId('com.mailonline.videojs-vast-vpaid').mavenDeployAndNexusUpload('bin');
});
