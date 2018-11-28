import Router from 'koa-router';

import { posts } from './posts.mjs';
import { home } from './home.mjs';
import { post } from './post.mjs';

const routes = [home, posts, post];

export const createRouter = app => {
  const router = new Router();

  routes.forEach(r => {
    router[r.method.toLowerCase()](r.path, async (ctx, next) => {
      try {
        // Validate the request parameters
        if (r.validators) {
          for (const validator of r.validators) {
            await validator(ctx, next);
          }
        }

        await r.handler(ctx);
      } catch (err) {
        console.log(err);
      }
    });
  });

  app.use(router.routes()).use(router.allowedMethods());
};
