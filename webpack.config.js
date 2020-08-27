const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

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
                use: [
                   {
                       loader: 'expose-loader',
                       options: 'jQuery'
                   },
                   {
                       loader: 'expose-loader',
                       options: '$'
                   }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    output: {
        filename: 'script.min.js',
        path: path.resolve(__dirname, 'dist'),
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