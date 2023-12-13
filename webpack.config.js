const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 5001, //default 8080
        open: true,
        hot: true
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './public/img/favicon.ico',
            title: 'Afazeres',
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/html/template.html')
        })
    ],
    //loaders
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}