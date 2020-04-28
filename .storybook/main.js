module.exports = {
  // これ入れないとフッター出ない
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-viewport/register",
  ],
  stories: ["../**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
