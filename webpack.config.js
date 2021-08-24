const path = require('path');

module.exports = {
    entry: './src/main.ts',
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          use: 'ts-loader',
          exclude: /node_modules/
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
    }
};