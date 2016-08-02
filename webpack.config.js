var webpack = require("webpack");
var path = require("path");

var bower_dir = __dirname + '/bower_components';

var config =  {
    entry :{
        index_browser: [path.join(__dirname, "/src/app/views/index_browser.js")],
        vendors: ['react']
    },
    output: {
        path: path.join(__dirname, "/dist/public/views/"),
        filename: '[name].js'
    },
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    resolve: {
        //alias: {
        //    'react': bower_dir + '/react/react.min.js'
        //},
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
       // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    module: {
        //noParse: [bower_dir + '/react/react.min.js'],
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

//config.addVendor('react', bower_dir + '/react/react.min.js');
module.exports = config;