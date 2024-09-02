const htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const plugin = require('tailwindcss');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html' 
        })
    ]
};