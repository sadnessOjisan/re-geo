const path = require("path");

const env = process.env.BUILD_MODE;

module.exports = {
  mode: env || "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /.stories.tsx/,
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".gif", "jpg", "png"],
  },
};
