const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        './javascript/index.js'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['env'],
                plugins: [require('babel-plugin-transform-react-jsx')]
            }
        }]

    }


}