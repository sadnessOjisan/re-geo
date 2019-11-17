const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve("babel-loader"),
      require.resolve("react-docgen-typescript-loader")
    ]
  });
  config.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    loader: "file-loader"
  });
  config.resolve.extensions.push(".ts", ".tsx", ".gif", ".css", "jpg", "png");

  return config;
};
