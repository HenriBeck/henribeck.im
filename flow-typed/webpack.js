// @flow

declare module 'webpack-merge' {
  declare module.exports: (config1: {}, config2: {}) => {};
}

declare class Plugin {
  constructor(options: {}): this,
}

declare module 'html-webpack-plugin' {
  declare module.exports: Class<Plugin>;
}

declare module 'webpack-pwa-manifest' {
  declare module.exports: Class<Plugin>;
}

declare module 'mini-css-extract-plugin' {
  declare class MiniCSSExtractPlugin extends Plugin {
    static loader: {},
  }

  declare module.exports: Class<MiniCSSExtractPlugin>;
}

declare module 'uglifyjs-webpack-plugin' {
  declare module.exports: Class<Plugin>;
}

declare module 'optimize-css-assets-webpack-plugin' {
  declare module.exports: Class<Plugin>;
}

declare module 'sw-precache-webpack-plugin' {
  declare module.exports: Class<Plugin>;
}

declare module 'webpack-bundle-analyzer' {
  declare module.exports: { BundleAnalyzerPlugin: Class<Plugin> };
}
