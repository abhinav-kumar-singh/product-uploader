import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV === 'development';

const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default defineConfig({
  context: __dirname,
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './public/index.html',
    })
  ],
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      })
    ],
  },
  experiments: {
    css: true,
  },
});
