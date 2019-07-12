const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.test?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extension: [".tsx", ".ts", "js"]
  },

  output: {
    filename: "netx.js",
    path: path.resolve(__dirname, "dist")
  }
};
