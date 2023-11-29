// craco.config.js
const CracoLessPlugin = require('craco-less');
const TntdCssThemePlugin = require('tntd-css-theme-plugin');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                        modules: true,
                        localIndexName: '[name]__[local]___[chunkhash:base64:5]',
                        plugins: [
                            new TntdCssThemePlugin({
                                "blue": "#126bfb",
                                "green": "#07c790",
                                "gold": "#f7b035",
                                "red": "#ef4444",
                                "purple": "#722ed1",
                                "cyan": "#13c2c2",
                                "magenta": "#eb2f96",
                                "pink": "#eb2f96",
                                "orange": "#fa8c16",
                                "yellow": "#fadb14",
                                "volcano": "#fa541c",
                                "geekblue": "#2f54eb",
                                "lime": "#a0d911",
                            })
                        ],
                        modifyVars: {
                            hack: "true; @import '~/variables/index.less'"
                        }
                    }
                },
            },
        },
    ],
    babel: {
        plugins: [
            ['import', { libraryName: 'antd',  "libraryDirectory": "es", style: true }]
        ],
    },
};
