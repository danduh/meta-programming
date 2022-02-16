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

            {test: /\.ts?$/, use: {loader: 'awesome-typescript-loader'}},

            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
};
