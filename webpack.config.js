const { resolve } = require('path')

module.exports = [
  {
    entry: './app/renderer.ts',
    target: 'electron-renderer',
    node: {
      __dirname: false,
      __filename: false,
    },
    output: {
      path: resolve(__dirname, 'app'),
      filename: 'renderer.js',
    },
    resolve: {
      extensions: ['.ts', '.vue', '.js'],
      alias: {
        vue$: 'vue/dist/vue.common.js',
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    devtool: '#source-maps',
  },
]
