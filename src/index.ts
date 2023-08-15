import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import ping from './features/ping';

const app: Express = express();
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const port: number = process.env?.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

ping.addRoutes(app);

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json'
    }
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
