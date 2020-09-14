const path = require('path');
const babelConfig = require('./babel.config.json');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {   
        rules: [
          {
            test: /.ts/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              //options: babelConfig
            }
          }
        ]
    }
}