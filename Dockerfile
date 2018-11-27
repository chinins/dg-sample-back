FROM node:10-alpine

WORKDIR /usr/src/api

EXPOSE 8080
CMD ["yarn", "api:watch"]