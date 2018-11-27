FROM node:10-alpine AS builder

WORKDIR /usr/src/api

COPY . .
RUN ["yarn", "install"]
RUN ["yarn", "api:build"]

FROM node:10-alpine

WORKDIR /usr/src/api

COPY ./package.json .
COPY ./yarn.lock .

ENV NODE_ENV=production

RUN ["yarn", "install"]
RUN ["yarn", "cache", "clean"]

COPY --from=builder /usr/src/api/dist ./dist

CMD ["yarn", "node:start"]
EXPOSE 8080
