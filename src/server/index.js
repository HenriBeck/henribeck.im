// @flow

import express, {
  type $Response, type $Request,
} from 'express';
import path from 'path';
import expressStaticGzip from 'express-static-gzip';

import renderApp from './render-app';

// eslint-disable-next-line no-process-env
const port = process.env.PORT;
const app = express();

app.use(expressStaticGzip(path.join(__dirname, '../../dist')));

app.get('*', (req: $Request, res: $Response) => {
  res.send(renderApp());
});

if (typeof port === 'undefined') {
  throw new TypeError('Missing port. Please set the port via an ENV variable!');
}

app.listen(
  parseInt(port, 10),
  () => {
    // eslint-disable-next-line no-console
    console.log('Server is listening on port', port);
  },
);
