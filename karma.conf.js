const webpack = require('webpack')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
    files: ['./karma-entry.js'],
    preprocessors: {
      'karma-entry.js': ['webpack'],
      'src/**/*.js': ['webpack'],
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.test': true,
        }),
      ],
    },
    customLaunchers: {
      ie_no_addons: {
        base: 'IE',
        flags: ['-extoff'],
      },
    },
  })
}
