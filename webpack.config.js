module.exports = {
    // change to .tsx if necessary
    entry: './hero/main.ts',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        // changed from extensions: [".js", ".ts"]
        extensions: [".ts"]
    },
    module: {
        rules: [
            // changed from { test: /\.ts?$/, use: { loader: 'babel-loader' } },
            {test: /\.ts?$/, use: {loader: 'awesome-typescript-loader'}},
            // addition - add source-map support
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
};
