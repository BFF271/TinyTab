const CopyWebpackPlugin = require('copy-webpack-plugin')
const env = process.env.BABEL_ENV
const configureWebpack = {}

const devServer = {
    host: 'localhost',
    port: '8080',
    open: true,
    https: false,
    hotOnly: true,
}

if (env === 'production') {
    configureWebpack.plugins = [
        new CopyWebpackPlugin([
            { from: './background.js' },
            { from: './manifest.json' },
            { from: '_locales', to: '_locales' },
        ]),
    ]
}

module.exports = {
    publicPath: env === 'production' ? './' : '/',
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack,
    devServer,
}
