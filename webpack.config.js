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
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] },
            }],
        },
        {
         test: /\.(scss|css)$/,
         exclude: /node_modules/,
         use: [
           'style-loader',
           'css-loader',
           'postcss-loader',
           'sass-loader',
         ],
     },

      ],
    },
};
