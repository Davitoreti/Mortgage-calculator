const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['postcss-loader']
            },{
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
};
