var path = require('path');
module.exports = {
  entry: './src/buForm.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'buForm.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};
