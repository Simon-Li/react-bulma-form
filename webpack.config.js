const webpack = require('webpack');
const path = require('path');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.WEBPACK_ENV;

const libraryName = '[name]'; // in case that needs common modules to be built
const plugins = [];
let outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({
        minimize: true
    }));
    outputFile = `${libraryName}.min.js`;
}
else {
    outputFile = `${libraryName}.js`;
}

const config = {
    entry: {
        buForm: path.resolve(__dirname, './src/buForm.js'),
        // can add more entries, i.e. common chunks for vendor modules
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        react: 'react',
        mobx: 'mobx',
        'mobx-react': 'mobx-react'
    },
    plugins
};

module.exports = config;
