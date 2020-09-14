const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {   
        rules: [
          {
            test: /\.(ts|tsx|js|jsx)$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            options: {
              configFile: false,
              presets: [
                '@babel/preset-react',
                '@babel/preset-env',
                '@babel/preset-typescript',
              ]
            }
          }
        ]
    }
}