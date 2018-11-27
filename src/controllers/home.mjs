import { getResource } from '../utils';

export const home = async ctx => {
  try {
    const data = await getResource('home');
    ctx.body = data;
  } catch (err) {
    ctx.throw(404, err.error.detail);
  }
};
