import { type Express, type Request, type Response } from 'express';
import type { ApiConfig } from '../../types/config';

import { PingController, ROUTES } from './controller';

const addRoutes = (
  app: Express,
  options: ApiConfig = { version: '0', apiPrefix: '/api' }): void => {
  console.log({ ROUTES });
  app.get(
    ROUTES.index,
    (_req: Request, res: Response) => {
      res.json(new PingController(options).ping());
    });

  app.get(
    ROUTES.debug,
    (_req: Request, res: Response) => {
      res.json(new PingController(options).debugPing());
    });

  app.get(
    ROUTES.error,
    (req: Request, res: Response) => {
      throw new Error('Expected broken route');
    });
};

export default {
  addRoutes
};
