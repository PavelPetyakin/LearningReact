const custom = require("../webpack.config");

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-knobs/register"],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: { ...config.resolve, alias: custom.resolve.alias },
    };
  },
};
