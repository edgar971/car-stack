var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

module.exports = {
    entry: [
        './src/js/client.js',
        './src/scss/app.scss'
    ],
    output: {
        path: path.resolve('public/'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("css/all.css")
    ],
    debug:true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|server.js)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")

            }

        ]
    }
}

