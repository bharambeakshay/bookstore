module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // add this line in webpack.config.js
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'] // add this line in  webpack.config.js
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};




// module.exports = {
//     entry: './src/index.js',
//     module: { //////////////
//         // add this
//         rules: [ // line
//             { // of
//                 test: /\.(js)$/, // code
//                 exclude: /node_modules/, // in
//                 use: ['babel-loader'] // webpack.config.js
//             } // file
//         ] //
//     }, //
//     resolve: { //
//         extensions: ['*', '.js'] //
//     }, //////////////
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: './dist'
//     }
// };






// module.exports = {
//     // 1
//     entry: './src/index.js',
//     // 2
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     // 3
//     devServer: {
//         contentBase: './dist'
//     }
// };