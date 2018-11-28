import { getResource } from '../utils';

export const posts = async ctx => {
  console.log('post controller');
  try {
    const posts = await getResource('posts');
    ctx.body = posts;
  } catch (err) {
    ctx.throw(err.error.detail);
  }
};
