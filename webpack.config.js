var webpack = require('webpack');


module.exports = {
    entry: [
        'babel-polyfill',
        './src/js/client.js'
    ],
    output: {
        filename: 'public/js/bundle.js'
    },
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

        ]
    }
}

