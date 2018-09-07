// @flow

import { type Middleware } from 'express';

declare module 'express-static-gzip' {
  declare export default function server(path: string): Middleware;
}
