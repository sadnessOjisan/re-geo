module.exports = (baseConfig, env) => {
  baseConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: "babel-loader"
  });
  baseConfig.module.rules.push({
    test: /\.css/,
    use: ["style-loader", { loader: "css-loader", options: { url: false } }]
  });
  baseConfig.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    loader: "file-loader"
  });
  baseConfig.resolve.extensions.push(
    ".ts",
    ".tsx",
    ".gif",
    ".css",
    "jpg",
    "png"
  );

  return baseConfig;
};
