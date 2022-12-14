const HtmlWebpacklugin = require('html-webpack-plugin');
const ModuleFederationplugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationplugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index'
            }
        }),
        new HtmlWebpacklugin({
            template: './public/index.html'
        })
    ]
};

