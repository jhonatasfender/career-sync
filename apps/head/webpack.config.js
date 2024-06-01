const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');
// const fs = require('fs');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'career',
    projectName: 'head',
    webpackConfigEnv,
    argv,
  });

  const all = merge(defaultConfig, {
    entry: join(__dirname, 'src/career-head.tsx'),
    output: {
      filename: '[name].js',
      path: join(__dirname, '../../dist/apps/head'),
      libraryTarget: 'system',
      uniqueName: 'head',
      devtoolNamespace: 'head',
      publicPath: '',
    },

    devServer: {
      port: 59284,
    },
    plugins: [
      new NxAppWebpackPlugin({
        tsConfig: './tsconfig.app.json',
        compiler: 'babel',
        outputFileName: 'career-head.js',
        main: './src/career-head.tsx',
        baseHref: '/',
        commonChunk: false,
        runtimeChunk: false,
        vendorChunk: false,
        namedChunks: false,
        assets: ['./src/favicon.ico', './src/assets'],
        styles: [],
        outputHashing:
          process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
        optimization: process.env['NODE_ENV'] === 'production',
      }),
      new NxReactWebpackPlugin({
        // Uncomment this line if you don't want to use SVGR
        // See: https://react-svgr.com/
        // svgr: false
      }),
    ],
  });

  // fs.writeFileSync(
  //   './webpack-config-output.json',
  //   JSON.stringify(all, null, 2),
  //   'utf8'
  // );

  return all;
};
