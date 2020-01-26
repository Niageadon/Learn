const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //mode: 'development', //'production'
    //mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        // name - имя энтри файла
        // contenthash - уникальный хэш бандла
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({ //
            template: './src/index.html'
        }),
        
    ]
}
