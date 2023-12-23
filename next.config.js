/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config, options) => {
      // https://github.com/mjmlio/mjml/issues/1365#issuecomment-555835755
      config.module.rules.push({
         test: /node_modules\/uglify-js\/tools\/node\.js/,
         loader: "null-loader",
      });
      // https://github.com/mjmlio/mjml/issues/438#issuecomment-352386596
      config.module.exprContextCritical = false;
      return config;
   },
};

module.exports = nextConfig;
