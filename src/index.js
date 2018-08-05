// @flow strict-local

import React from 'react';
import { JssProvider } from 'react-jss';
import { render } from 'react-dom';

import 'normalize.css';

import App from './App';
import jss from './jss';

/**
 * Register the service worker.
 */
function registerServiceWorker() {
  if (navigator.serviceWorker) {
    try {
      navigator.serviceWorker.register('/service-worker.js', { scope: '/' });

      // eslint-disable-next-line no-console
      console.log('Service Worker registered successfully');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Service Worker registration failed:', error);
    }
  }
}

const element = document.getElementById('app');

if (element) {
  render((
    <JssProvider jss={jss}>
      <App />
    </JssProvider>
  ), element);
}

if (!window.location.host.startsWith('localhost')) {
  registerServiceWorker();
}
