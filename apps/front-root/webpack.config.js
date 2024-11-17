const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'career';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  const nxConfig = {
    entry: join(__dirname, 'src/app/career-root-config.ts'),
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[contenthash].js',
      path: join(__dirname, '../../dist/apps/front-root'),
      libraryTarget: 'module',
      uniqueName: 'root-config',
      devtoolNamespace: 'root-config',
      publicPath: '',
      module: true,
    },
    experiments: {
      outputModule: true,
    },
    devServer: {
      port: 51235,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/app/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new NxAppWebpackPlugin({
        tsConfig: './tsconfig.app.json',
        compiler: 'tsc',
        commonChunk: false,
        runtimeChunk: false,
        vendorChunk: false,
        namedChunks: false,
        outputFileName: 'career-root-config.js',
        main: './src/app/career-root-config.ts',
        index: './src/app/index.ejs',
        baseHref: '/',
        assets: ['./src/favicon.ico', './src/assets'],
        styles: ['./src/styles.scss'],
        outputHashing:
          process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
        optimization: process.env['NODE_ENV'] === 'production',
        sourceMap: true,
      }),
    ],
  };

  const all = merge(defaultConfig, nxConfig);

  return all;
};
