const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonWebPackConfig = require('./webpack.common');
const dependencies = require('../package.json').dependencies;

const devConfig = {
    mode: 'development',
    output:{
        publicPath: 'http://localhost:3002/',
    },
    devServer: {
      port: 3002,
      historyApiFallback: {
        index: 'index.html',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'hostRemoteEntry.js',
        exposes: {},
        shared: { react: { singleton: true }, "react-dom": { singleton: true } },
      }),
    ],
}

module.exports = merge(commonWebPackConfig, devConfig);