const makeConfig = require('./webpack/build');
const webpack = require('webpack');
const rimraf = require('rimraf');
const path = require('path');

const ALLOWED_MODES = {
  DEBUG: false,
  DIST: true,
  PROD: true,
};
console.log(process.env.MODE);
const BUILD_MODE = 'DIST';
if (!(BUILD_MODE && ALLOWED_MODES[BUILD_MODE])) {
  console.log('Build mode was not defined.');
  process.abort();
}

const buildPath = path.join(__dirname, BUILD_MODE.toLowerCase());

function build() {
  const webpackConfig = makeConfig({
    BUILD_MODE,
    IS_DEV: false,
  });
  webpackConfig.output = {
    path: buildPath,
 // publicPath: '../',
    filename: 'frassets/[name].bundle.[chunkhash].js',
    chunkFilename: 'frassets/[id].bundle.[chunkhash].js',
  };
  webpack(webpackConfig, err => {
    if (err) {
      throw new Error(err);
    }
    console.log('Project build is complete');
  });
}

rimraf(buildPath, build);