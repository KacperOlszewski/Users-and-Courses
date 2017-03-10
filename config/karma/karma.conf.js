const webpackTestConfig = require('../webpack/webpack.test');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './config/karma/test-bundle.js', watched: false }
    ],

    preprocessors: {
      './config/karma/test-bundle.js': ['webpack']
    },

    webpack: webpackTestConfig,

    webpackServer: {
      noInfo: true
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: ["mocha", "progress", "junit"],

    junitReporter: {
      outputDir: 'config/karma',
      outputFile: 'karma-unit.xml',
      useBrowserName: false
    },

    port: 9876,

    hostname: '0.0.0.0',

    colors: true,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};