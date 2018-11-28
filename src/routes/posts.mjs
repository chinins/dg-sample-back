import { postsController } from '../controllers';

export const posts = {
  method: 'GET',
  path: '/posts',
  handler: postsController
};
