import { homeController } from '../controllers';

export const home = {
  method: 'GET',
  path: '/home',
  handler: homeController
};
