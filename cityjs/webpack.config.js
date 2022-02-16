module.exports = {
    // change to .tsx if necessary
    entry: './cityjs/home.component.ts',
    output: {
        filename: 'hero-app/cityjs.js'
    },
    resolve: {
        // changed from extensions: [".js", ".ts"]
        extensions: [".ts"]
    },
    mode:"development",
    module: {
        rules: [
            // changed from { test: /\.ts?$/, use: { loader: 'babel-loader' } },
            {
                test: /\.ts?$/, use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'cityjs/tsconfig.json'
                    }
                }
            },
            // addition - add source-map support
            // {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
};
