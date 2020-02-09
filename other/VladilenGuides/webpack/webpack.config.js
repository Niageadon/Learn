const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    plugins: [
        new HTMLWebpackPlugin({ //
            template: './src/index.html'
        }),
        new  CleanWebpackPlugin() //удаляет старый хэш
    ],
    module: {
        rules: [
            {
	            // Нужны для работы c css файлами
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // Порядок запуска лоадеров: справа налево
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
