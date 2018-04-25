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
  static getInitialProps({ renderPage }: Options) {
    const registry = new SheetsRegistry();
    const page = renderPage(Component => () => (
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
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            key="font"
          />

          <title key="title">Henri Beck | Personal Website</title>

          <link
            rel="stylesheet"
            href="/_next/static/style.css"
            key="css"
          />

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
