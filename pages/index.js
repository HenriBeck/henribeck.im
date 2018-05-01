// @flow

import React from 'react';
import injectSheet from 'react-jss';
import normalize from 'jss-normalize';

import App from '../src/App';

export default injectSheet(normalize)(() => <App />);

