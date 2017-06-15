var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './scripts/app.js',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({use: 'css-loader!sass-loader', publicPath: './'})
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css',
            allChunks: true, disable: false
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist/",
    }
};