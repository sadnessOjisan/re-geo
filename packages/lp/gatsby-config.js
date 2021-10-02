module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // HACK: needs for linaria build. Gatsby needs babel config for linaria.
    "gatsby-plugin-typescript",
    "gatsby-plugin-linaria",
  ],
};
