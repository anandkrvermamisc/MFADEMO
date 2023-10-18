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
        name: 'products',
        filename: 'productsRemoteEntry.js',
        remotes: {
            widgets: 'widgets@http://localhost:3000/widgetsRemoteEntry.js'
        },
        shared: { react: { singleton: true }, "react-dom": { singleton: true } },
      }),
    ],
}

module.exports = merge(commonWebPackConfig, devConfig);