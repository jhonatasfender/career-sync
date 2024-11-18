const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');
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
      path: join(__dirname, '../../dist/apps/head'),
      libraryTarget: 'module',
      uniqueName: 'head',
      devtoolNamespace: 'head',
      filename: 'career-head.js',
      publicPath: '',
      module: true,
    },
    experiments: {
      outputModule: true,
    },
    devServer: {
      port: 59284,
      hot: true,
    },
    plugins: [
      new NxAppWebpackPlugin({
        commonChunk: false,
        runtimeChunk: false,
        vendorChunk: false,
        namedChunks: false,
        tsConfig: './tsconfig.app.json',
        compiler: 'babel',
        main: './src/career-head.tsx',
        baseHref: '/',
        assets: ['./src/favicon.ico', './src/assets'],
        styles: [],
        outputHashing:
          process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
        optimization: process.env['NODE_ENV'] === 'production',
        sourceMap: true,
      }),
      new NxReactWebpackPlugin(),
    ],
  });

  return all;
};
