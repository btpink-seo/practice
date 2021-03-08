'use strict';
var gulp = require('gulp');
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2));

gulp.task('sass:watch', function() {
    return new Promise(function(resolve, reject) {
        var root = {
            basic: 'src/main/webapp/basic/chat/',
            service: 'src/main/webapp/service/chat/',
        }
        console.log(root[argv.start]);
        resolve();
      });
});
