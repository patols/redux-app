const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: './app.js',
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/assets',
    },

    devServer: {
      contentBase: path.resolve(__dirname, './src'),
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] },
            }],
        },
        {
        test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: { modules: true },
                },
            ],
        },
        {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: [
             'babel-loader',
           ],
         },
      ],
    },
};
