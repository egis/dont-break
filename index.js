#!/usr/bin/env node

var dontBreak = require('./src/dont-break');

if (module.parent) {
  module.exports = dontBreak;
} else {
  require('./src/check-updates');

  var join = require('path').join;
  var pkg = require(join(__dirname, 'package.json'));
  console.log(pkg.name + '@' + pkg.version, '-', pkg.description);

  var options = require('./src/cli-options');
  dontBreak(options).done();
}
