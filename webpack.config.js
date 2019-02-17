const path = require("path");

const env = process.env.BUILD_MODE;

module.exports = {
  mode: env || "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css/,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".tsx", ".css"]
  }
};
