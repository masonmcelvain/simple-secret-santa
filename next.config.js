/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config, options) => {
      // https://github.com/mjmlio/mjml/issues/1365#issuecomment-555835755
      config.module.rules.push({
         test: /node_modules\/uglify-js\/tools\/node\.js/,
         loader: "null-loader",
      });
      return config;
   },
};

module.exports = nextConfig;
