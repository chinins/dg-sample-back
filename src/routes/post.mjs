import { specificPostController } from '../controllers';

export const post = {
  method: 'GET',
  path: '/post/:name',
  handler: specificPostController
};
