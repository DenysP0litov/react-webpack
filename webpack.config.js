const path = require("path");
const miniCss = require('mini-css-extract-plugin');

module.exports={
  mode: "development", 
  entry: "./index.tsx", 
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true ,
    liveReload: true
  },
  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx','.json'] 
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use:  'babel-loader' 
      },
      {
        test: /\.(ts|tsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript'
                ]
            }
        },
        exclude: /node_modules/
      },
      {
        test:/\.(s*)css$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
  ]
}