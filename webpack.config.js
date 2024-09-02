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
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },{
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    outputPath: 'images',
                    publicPath: 'images',
                },
                loader: 'url-loader',
                options: {
                    limit: 8192, // 8kb, arquivos menores que isso serão convertidos para base64
                    name: '[name].[hash:7].[ext]', // nome do arquivo com hash para cache busting
                    outputPath: 'images/', // diretório de saída para as imagens
                },
            }]
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