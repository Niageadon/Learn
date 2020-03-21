const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const terserWebpackPlugin = require('terser-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const optimization = () => {
    const config = {
        splitChunks: {
            // Выносит библиотеки в отдельный vendor файл
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new optimizeCssAssetsWebpackPlugin(),   // минификация css файлов
            new terserWebpackPlugin()               // минификация js-а
        ]
    }
    return config
}

const getJsLoaders = () => {
    const loaders= [{
        loader: "babel-loader",
        options: {
            presets: [
                '@babel/preset-env'
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
        }
    }];
    if(isDev) {
        loaders.push('eslint-loader')
    }
    
    return loaders
}

const cssLoaders = (loader) => {
    const loaders =  [
        {
            loader: miniCssExtractPlugin.loader,
            options: {
                hmr: isDev, // hot module replacement
                reloadAll: true
            }
        },
        'css-loader'] // Порядок запуска лоадеров: справа налево
    if(loader) {
        loaders.push(loader)
    }
    return loaders
}
module.exports = {
    //mode: 'development', //'production'
    //mode: 'development',
    entry: {
        main: ['@babel/polyfill', './src/index.js'],
        analytics: './src/analytics/index.ts'
    },
    output: {
        filename: '[name].[contenthash].js',
        // name - имя энтри файла, берется из entry
        // contenthash - уникальный хэш бандла
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jpg', '.svg', '.json'],
        alias: {
            '@ass': path.resolve(__dirname, 'src/assets')
        }
    },
    devServer: {
        // Плагин webpack-dev-server
        port: 4000,
        hot: isDev
    },
    devtool: isDev? 'source-map': '',
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({ //
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new  CleanWebpackPlugin(),  // Удаляет старый хэш
        new copyWebpackPlugin([     // Плагин для копирования файлов или папок
            {
                from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
        new miniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
        
    ],
    module: {
        rules: [
            /*{
	            // Нужны для работы c css файлами
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // Порядок запуска лоадеров: справа налево
            },*/
            {
	            // Нужны для работы c css файлами
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                // Для работы с изображениями
                test: /\.(svg|png|jpeg)/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: getJsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    },
}
