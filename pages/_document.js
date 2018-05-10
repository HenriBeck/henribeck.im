// @flow

import React from 'react'; // eslint-disable-line filenames/match-exported
import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';
import {
  JssProvider,
  SheetsRegistry,
} from 'react-jss';

type Options = { renderPage: <T>(T) => { html: string, errorHtml: string } };

export default class MyDocument extends Document {
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

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            key="font"
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
