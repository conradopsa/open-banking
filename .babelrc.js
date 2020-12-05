"use strict";

module.exports = function (api) {
    api.cache(true);
    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    },
                    "modules": "commonjs"
                }
            ],
            "@babel/preset-typescript"
        ],
        "plugins": [
            [
                "@babel/plugin-proposal-decorators",
                {
                    "legacy": true
                }
            ],
            "@babel/plugin-transform-runtime"
        ]
    }
}