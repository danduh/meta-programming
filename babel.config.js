// babel.config.js
'use strict';

module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "esmodules": false,
                    "chrome": 75
                }
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ]
}
