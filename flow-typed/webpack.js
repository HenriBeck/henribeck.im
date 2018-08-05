// @flow

declare module 'webpack-merge' {
  declare module.exports: (config1: {}, config2: {}) => {};
}

declare module 'html-webpack-plugin' {
  declare class HTMLWebpackPlugin {
    constructor(options: {}): this,
  }

  declare module.exports: Class<HTMLWebpackPlugin>;
}

declare module 'webpack-pwa-manifest' {
  declare class WebpackPWAManifest {
    constructor(options: {}): this,
  }

  declare module.exports: Class<WebpackPWAManifest>;
}

declare module 'mini-css-extract-plugin' {
  declare class MiniCSSExtractPlugin {
    static loader: {},
    constructor(options: {}): this,
  }

  declare module.exports: Class<MiniCSSExtractPlugin>;
}

declare module 'uglifyjs-webpack-plugin' {
  declare class UglifyJSWebpackPlugin {
    constructor(options: {}): this,
  }

  declare module.exports: Class<UglifyJSWebpackPlugin>;
}

declare module 'optimize-css-assets-webpack-plugin' {
  declare class OptimizeCSSAssetsWebpackPlugin {
    constructor(options: {}): this,
  }

  declare module.exports: Class<OptimizeCSSAssetsWebpackPlugin>;
}

declare module 'sw-precache-webpack-plugin' {
  declare class SWPrecacheWebpackPlugin {
    constructor(options: {}): this,
  }

  declare module.exports: Class<SWPrecacheWebpackPlugin>;
}

declare module 'webpack-bundle-analyzer' {
  declare class BundleAnalyzerPlugin {
    constructor(options: {}): this,
  }

  declare module.exports: { BundleAnalyzerPlugin: Class<BundleAnalyzerPlugin> };
}
