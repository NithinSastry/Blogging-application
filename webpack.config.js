var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/dev-server',
        'babel-polyfill',
        './js/app'
    ],
    output: {
        filename: './js/bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: [' ', '.js', '.json', '.jsx', '.less'],
        modules: [
            __dirname, './node_modules'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 version!less-loader'
            },
            {
                test: /\.jsx?$/,
                include: [path.join(__dirname, 'js')],
                loaders: [
                    'react-hot-loader',
                    'babel-loader?presets[]=react,presets[]=es2015',
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        port: 9000
    }
};