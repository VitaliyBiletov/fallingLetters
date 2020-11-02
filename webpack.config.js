const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {
                patterns:[
                    {from: path.resolve(__dirname,'src/favicon.ico'),
                    to: path.resolve(__dirname,'dist')},
                ],
            }
)
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ttf|woff)$/,
                use: ['file-loader']
            }
            ,
            {
                test: /\.(ico|png|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}