import { getResource } from '../utils';

export const specificPost = async ctx => {
  try {
    const posts = await getResource('posts');
    const post = posts.filter(post => post.title === ctx.params.name);
    ctx.body = post[0];
  } catch (err) {
    ctx.throw(err.error.details);
  }
};
