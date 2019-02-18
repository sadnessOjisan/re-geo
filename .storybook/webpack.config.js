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
  baseConfig.resolve.extensions.push(".ts", ".tsx");

  return baseConfig;
};
