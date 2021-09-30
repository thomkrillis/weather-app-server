import * as express from 'express';

export function allowCORS(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (process.env.NODE_ENV !== 'production') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  next();
}