// @flow

import { create } from 'jss';
import camelCasePlugin from 'jss-camel-case';
import globalPlugin from 'jss-global';
import nestedPlugin from 'jss-nested';
import vendorPrefixerPlugin from 'jss-vendor-prefixer';
import defaultUnitPlugin from 'jss-default-unit';

const jss = create();

jss.use(
  globalPlugin(),
  nestedPlugin(),
  camelCasePlugin(),
  defaultUnitPlugin(),
  vendorPrefixerPlugin(),
);

export default jss;
