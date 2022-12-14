const HtmlWebpacklugin = require('html-webpack-plugin');
const ModuleFederationplugin = require('webpack/lib/container/ModuleFederationPlugin')


module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationplugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js'
            }
        }),
        new HtmlWebpacklugin({
            template: './public/index.html'
        })
    ]
};
