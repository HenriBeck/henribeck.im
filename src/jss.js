// @flow

import { create } from 'jss';
import camelCasePlugin from 'jss-camel-case';
import globalPlugin from 'jss-global';
import nestedPlugin from 'jss-nested';
import vendorPrefixerPlugin from 'jss-vendor-prefixer';

const jss = create();

jss.use(
  globalPlugin(),
  nestedPlugin(),
  camelCasePlugin(),
  vendorPrefixerPlugin(),
);

export default jss;
