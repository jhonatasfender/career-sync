const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');

const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "career",
    projectName: "head",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      filename: '[name].js',
      path: join(__dirname, '../../dist/apps/head'),
    },
    devServer: {
      port: 59284,
    },
    plugins: [
      new NxAppWebpackPlugin({
        tsConfig: './tsconfig.app.json',
        compiler: 'babel',
        main: './src/career-head.tsx',
        // index: './src/index.html',
        baseHref: '/',
        assets: ['./src/favicon.ico', './src/assets'],
        styles: [],
        outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
        optimization: process.env['NODE_ENV'] === 'production',
      }),
      new NxReactWebpackPlugin({
        // Uncomment this line if you don't want to use SVGR
        // See: https://react-svgr.com/
        // svgr: false
      }),
    ],
  });
};

