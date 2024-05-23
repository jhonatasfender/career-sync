const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

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
    output: {
      path: join(__dirname, '../../dist/apps/front-root'),
    },
    devServer: {
      port: 4200,
    },
    plugins: [
      new NxAppWebpackPlugin({
        tsConfig: './tsconfig.app.json',
        compiler: 'swc',
        main: './src/main.ts',
        index: './src/index.html', // Esse arquivo será gerado pelo HtmlWebpackPlugin
        baseHref: '/',
        assets: ['./src/favicon.ico', './src/assets'],
        styles: ['./src/styles.scss'],
        outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
        optimization: process.env['NODE_ENV'] === 'production',
      }),
    ],
  };

  return merge(defaultConfig, nxConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.ejs',
        filename: 'index.html',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
