var babelPolyfillPackageJson = require('./node_modules/babel-polyfill/package.json');
var babelPolyfillVersion = babelPolyfillPackageJson.version;

var vk = '$$$___lenientBabelPolyfillBabelPolyfillVersion___$$$';

if (global[vk]) {
  if (global[vk] !== babelPolyfillVersion) {
    throw new Error("lenient-babel-polyfill won't include *different* verisons of babel-polyfill (" + global[vk] + " vs. " + babelPolyfillVersion);
  }
} else {
  global[vk] = babelPolyfillVersion;
  require('babel-polyfill');
}

var packageJson = require('./package.json');
var version = packageJson.version;

module.exports = {
  version,
  babelPolyfillVersion,
};
