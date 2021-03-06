const path = require('path');

const PACKAGE = require('./package.json');
const version = PACKAGE.version;

module.exports = {
  entry: './src/lib.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
    ]
  },
  devtool: 'inline-source-map',
  output: {
    filename: `blocklike-${version}.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'blockLike',
  },
  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000
  }
};
