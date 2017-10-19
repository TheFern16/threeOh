const path = require('path');

module.exports = {
  context: __dirname,
  entry: './app/app.js',
  devtool: 'cheap-eval-source-maps',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  }
}