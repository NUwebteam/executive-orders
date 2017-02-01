'use strict';

let webpack = require('webpack');
let path    = require('path');

module.exports = {
    entry: {
        bundle: __dirname + "/index.js"
    },
    output: {
        path: path.join(__dirname, "./"),
        filename: "bundle.js"
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            "node_modules",
            "assets/scripts"
        ]
    },
};
