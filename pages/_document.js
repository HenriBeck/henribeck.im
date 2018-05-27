// @flow

import React from 'react'; // eslint-disable-line filenames/match-exported
import {
  Head,
  Main,
  NextScript,
} from 'next/document';
import PropTypes from 'prop-types';
import {
  JssProvider,
  SheetsRegistry,
} from 'react-jss';
import 'mdi/css/materialdesignicons.css';

type Options = { renderPage: <T>(T) => { html: string, errorHtml: string } };
type Props = { css: string };

export default class MyDocument extends React.Component<Props> {
  static getInitialProps(options: Options) {
    const registry = new SheetsRegistry();
    const page = options.renderPage(Component => () => (
      <JssProvider registry={registry}>
        <Component />
      </JssProvider>
    ));

    return {
      ...page,
      css: registry.toString(),
    };
  }

  static childContextTypes = { _documentProps: PropTypes.any };

  getChildContext() {
    return { _documentProps: this.props };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
            key="font"
          />

          <link
            rel="stylesheet"
            href="/static/css/materialdesignicons.min.css"
          />

          <title key="title">Henri Beck | Personal Website</title>

          <link
            rel="manifest"
            href="/static/manifest.json"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <meta
            name="Description"
            content="Personal Website of Henri Beck"
          />

          <meta
            name="theme-color"
            content="#2196F3"
          />

          {/* eslint-disable-next-line react/no-danger */ }
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
