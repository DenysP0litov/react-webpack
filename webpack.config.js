const path = require("path");

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
          test: /\.(js|jsx|ts|tsx)$/, 
          exclude: /node_modules/, 
          use:  'babel-loader' 
        }
      ]
    }
}