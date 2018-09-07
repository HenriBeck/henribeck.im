// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  JssProvider,
  SheetsRegistry,
} from 'react-jss';

import App from '../client/App';
import jss from '../client/jss';
// $FlowFixMe: Flow can't type json which produces an error
import stats from '../../dist/asset-stats.json'; // eslint-disable-line import/no-unresolved

import template from './template';

const assets = Object
  .keys(stats.assetsByChunkName)
  .reduce((accu, name) => {
    if (Array.isArray(stats.assetsByChunkName[name])) {
      return [
        ...accu,
        ...stats.assetsByChunkName[name],
      ];
    }

    return [
      ...accu,
      stats.assetsByChunkName[name],
    ];
  }, []);
const jsAssets = assets
  .filter(asset => asset.endsWith('.js'))
  .map(asset => `<script type="text/javascript" src="${asset}"></script>`)
  .join('\n');
const cssAssets = assets
  .filter(asset => asset.endsWith('.css'))
  .map(asset => `<link href="${asset}" rel="stylesheet">`)
  .join('\n');

export default function renderApp() {
  const sheets = new SheetsRegistry();
  const app = renderToString((
    <JssProvider
      jss={jss}
      registry={sheets}
    >
      <App />
    </JssProvider>
  ));

  return template(app, {
    css: `
      ${cssAssets}
      <style type="text/css">
        ${sheets.toString()}
      </style>
    `,
    js: jsAssets,
  });
}
