const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["i.imgur.com", "www.google.com", "imgur.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  webpackDevMiddleware: (config) => config,
};
