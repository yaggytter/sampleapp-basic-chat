const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    "builder": "webpack5",
  },
  staticDirs: ['../public'],
  babel: async (config) => {
    config.plugins = [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ];
    return config;
  },
  webpackFinal: async (config) => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    config.resolve.alias['@emotion/core'] = toPath(
      'node_modules/@emotion/react'
    );
    config.resolve.alias['@emotion/styled'] = toPath(
      'node_modules/@emotion/styled'
    );
    config.resolve.alias['emotion-theming'] = toPath(
      'node_modules/@emotion/react'
    );
    return config;
  },
}
