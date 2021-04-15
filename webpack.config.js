const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
}

module.exports = (env, argv) => {
  if (argv && argv.mode === 'production')
    config.output.publicPath = '/todoapp-typescript/'

  return config
}
