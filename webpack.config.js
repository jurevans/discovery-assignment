const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = 'build';
const SRC_DIR = 'src';
const PUBLIC_DIR = 'public';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `./${PUBLIC_DIR}/index.html`,
    filename: 'index.html',
    inject: 'body',
});

const config = {
    entry: [
        `./${SRC_DIR}/index.js`,
        `./${SRC_DIR}/scss/main.scss`
    ],
    output: {
	    path: path.resolve(__dirname, DIST_DIR),
	    filename: 'js/app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    devServer: {
        contentBase: `./${DIST_DIR}`,
        hot: false
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            allChunks: true,
        }),
    ]
};

module.exports = config;