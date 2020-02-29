const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    //mode: 'development', //'production'
    //mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics/index.js'
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
    optimization: {
        // Выносит библиотеки в отдельный vendor файл
        splitChunks: {
            chunks: 'all'
        }
    },
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
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev, // hot module replacement
                            reloadAll: true
                        }
                    },
                    'css-loader'] // Порядок запуска лоадеров: справа налево
            },
            {
                // Для работы с изображениями
                test: /\.(svg|png|jpeg)/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
}
