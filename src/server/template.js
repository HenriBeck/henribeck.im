// @flow

type Assets = {
  js: string,
  css: string,
};

export default function template(app: string, {
  js,
  css,
}: Assets) {
  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Henri Beck | Personal Website</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="preload" as="style">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="Description" content="Personal Website of Henri Beck">
        <meta name="theme-color" content="#2196F3">
        ${css}
      </head>
      
      <body>
        <noscript>Please enable JavaScript to correctly see the page</noscript>
        <div id="app">${app}</div>
        ${js}
      </body>
    </html>
  `;
}
