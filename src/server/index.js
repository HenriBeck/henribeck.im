// @flow

import express, {
  type $Response,
  type $Request,
} from 'express';
import path from 'path';
import expressStaticGzip from 'express-static-gzip';

import renderApp from './render-app';

// eslint-disable-next-line no-process-env
const port = typeof process.env.PORT === 'string' ? process.env.PORT : '443';
const app = express();

app.use(expressStaticGzip(path.join(__dirname, '../../dist')));

app.get('*', (req: $Request, res: $Response) => {
  res.send(renderApp());
});

app.listen(
  parseInt(port, 10),
  () => {
    // eslint-disable-next-line no-console
    console.log('Server is listening on port', port);
  },
);
