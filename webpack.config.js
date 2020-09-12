const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const DIST_PATH = process.env.DIST_PATH || path.resolve(__dirname, 'dist');

process.traceDeprecation = true;

module.exports = {
    name: 'client',
    mode: 'development',
    entry: ['regenerator-runtime', './src/scripts/script.ts'],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    output: {
        filename: 'script.min.js',
        path: DIST_PATH,
        library: 's2'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: { output: { comments: false } },
                extractComments: false
            })
        ]
    },
    plugins: []
}