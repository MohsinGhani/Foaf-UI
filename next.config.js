module.exports = {
  reactStrictMode: true,
};

const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withLess(
    withImages(
      withSass({
        env: {
          ANY_ENV_KEY: "ANY_ENV_VARIABLE",
        },
      })
    )
  )
);
const withImage = require("next-images");

module.exports = withImage();

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
module.exports = {
  images: {
    loader: "imgix",
    path: "https://foaf-ui.web.app/",
  },
};
