import util from 'util';

import Koa from 'koa';
import logger from 'koa-logger';
import cors from 'koa-cors';

import { createRouter } from './routes';

console.log('hello world');
console.log('environment variables: %s', util.inspect(process.env));

const app = new Koa();

app.use(logger());
app.use(cors());

createRouter(app);

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(
  {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT, 10)
  },
  () => {
    console.log('Koa server listening on port %d', parseInt(process.env.PORT, 10));
  }
);
