const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        }
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(jpeg|jpg|gif|png|svg|webp)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]--[hash:base64:5].[ext]',
                        outputPath: 'static/images',
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|otf)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]--[hash:base64:5].[ext]',
                        outputPath: 'static/fonts',
                    }
                }
            },
        ],
    },
    output: {
        filename: 'static/js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
}