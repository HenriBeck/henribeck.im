// @flow strict-local

import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';

import App from './App';

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
  render(<App />, element);
}

if (!window.location.host.startsWith('localhost')) {
  registerServiceWorker();
}
