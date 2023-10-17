const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonWebPackConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    output:{
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
      port:3000,
      historyApiFallback: {
        index: 'index.html',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'products',
        filename: 'productsRemoteEntry.js',
        remotes: {
            widgets: 'widgets@http://localhost:3001/widgetsRemoteEntry.js'
        },
        // shared: dependencies,
      }),
    ],
}

module.exports = merge(commonWebPackConfig, devConfig);