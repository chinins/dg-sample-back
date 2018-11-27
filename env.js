import dotenv from 'dotenv';

const env = dotenv.config({ silent: true }).parsed;

if (env) {
  Object.keys(env).forEach(key => {
    process.env[key] = process.env[key] ? process.env[key] : env[key];
  });
}

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
process.env.PORT = process.env.PORT ? process.env.PORT : 8080;
