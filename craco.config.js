// craco.config.js
module.exports = {
  style: {
    css: {
      loaderOptions: {
        sourceMap: false,
      },
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
      loaderOptions: {
        sourceMap: false,
      },
    },
  },
  webpack: {
    configure: {
      resolve: {
        alias: {
          crypto: require.resolve("crypto-browserify"),
        },
        fallback: {
          stream: require.resolve("stream-browserify"),
        },
      },
    },
  },
};
