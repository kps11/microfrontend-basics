const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPulgin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports ={
    mode : 'development',
    devServer: {
        port : 8081,
    },
    plugins: [
        new ModuleFederationPulgin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};


