var webpack = require("webpack");
var path = require("path");

var config =  {
    entry :{
        index_browser: [path.join(__dirname, "/src/app/views/index_browser.js")],
        vendors: ['react','react-dom', 'jquery']
    },
    output: {
        path: path.join(__dirname, "/dist/public/views/"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
       new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader',
                exclude: /node_modules/,
            },
            {   test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {   test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
};

module.exports = config;