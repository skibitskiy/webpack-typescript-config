const path = require('path');

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
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            options: {
              configFile: false,
              presets: ["@babel/preset-typescript"]
            }
          }
        ]
    }
}