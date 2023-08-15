import { type Express, type Request, type Response } from 'express';

interface ApiConfig {
  version: string
  apiPrefix: string
}

const API_ROOT = 'ping';

const addRoutes = (
  app: Express,
  options: ApiConfig = { version: '0', apiPrefix: '/api' }): void => {
  app.get(
    `${options.apiPrefix}/v${options.version}/${API_ROOT}`,
    (req: Request, res: Response) => {
      res.json({
        status: 'pong',
        when: new Date()
      });
    });

  app.get(
    `${options.apiPrefix}/v${options.version}/${API_ROOT}/debug`,
    (req: Request, res: Response) => {
      res.json({
        status: 'pong',
        when: new Date(),
        version: options.version,
        ...process.env
      });
    });

  app.get(
    `${options.apiPrefix}/v${options.version}/${API_ROOT}/error`,
    (req: Request, res: Response) => {
      throw new Error('Expected broken route');
    });
};

export default {
  addRoutes
};
