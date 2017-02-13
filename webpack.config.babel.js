import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './js/app'
    ],
    output: {
        filename: "js/bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 version!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, include: [path.join(__dirname, 'js')], loaders: ['react-hot-loader', 'babel?presets[]=react-loader,presets[]=es2015', 'babel-loader'] }
        ]
    }
};