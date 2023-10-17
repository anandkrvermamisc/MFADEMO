const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonWebPackConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    output:{
        publicPath: 'http://localhost:5001/',
    },
    devServer: {
      port: 5001,
      historyApiFallback: {
        index: 'index.html',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'Widgets',
        filename: 'remoteEntry.js',
        exposes: {},
        // shared: dependencies,
      }),
    ],
}

module.exports = merge(commonWebPackConfig, devConfig);