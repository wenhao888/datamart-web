module.exports =  {
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
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};