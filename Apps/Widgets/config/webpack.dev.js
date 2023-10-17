const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonWebPackConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    output:{
        publicPath: 'http://localhost:3001/',
    },
    devServer: {
      port:3001,
      historyApiFallback: {
        index: 'index.html',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'widgets',
        filename: 'widgetsRemoteEntry.js',
        exposes: {
          './WidgetCounter': './src/components/Counter.js',
          './WidgetCart': './src/components/ShoppingCart.js',
        },
        // shared: dependencies,
      }),
    ],
}

module.exports = merge(commonWebPackConfig, devConfig);