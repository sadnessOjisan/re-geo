module.exports = (baseConfig, env) => {
  baseConfig.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: "babel-loader"
  });
  baseConfig.resolve.extensions.push(".ts", ".tsx");

  return baseConfig;
};
