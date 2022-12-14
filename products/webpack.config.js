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
                './ProductsIndex': './src/bootstrap'
            },
            shared: [
                // faker:{
                //     singelton:true
                // }
                'faker'
            ],
        }),
        new HtmlWebpacklugin({
            template: './public/index.html'
        })
    ]
};

