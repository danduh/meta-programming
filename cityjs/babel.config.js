// babel.config.js
'use strict';

module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "esmodules": false,
                    "chrome": 96
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
