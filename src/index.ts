import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config';

import ping from './features/ping';

const app: Express = express();
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const port: number = process.env?.PORT ? parseInt(process.env.PORT) : 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

ping.addRoutes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
