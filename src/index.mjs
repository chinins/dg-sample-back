import util from 'util';

import Koa from 'koa';

console.log('hello world');
console.log('environment variables: %s', util.inspect(process.env));

const app = new Koa();

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
