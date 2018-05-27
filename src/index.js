// @flow strict-local

import React from 'react';
import { render } from 'react-dom';

import 'mdi/css/materialdesignicons.min.css';
import 'normalize.css';

import App from './App';

/**
 * Register the service worker.
 */
async function registerServiceWorker() {
  // eslint-disable-next-line compat/compat
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    try {
      // eslint-disable-next-line compat/compat
      await navigator.serviceWorker.register('/service-worker.js', { scope: '/' });

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
  render(<App />, element);
}

registerServiceWorker();
