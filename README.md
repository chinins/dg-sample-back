# dg-sample-back

## Environments

Create a `.env` file at the root of the project, with the following contents depending on the environment.

### Development

```
COMPOSE_FILE=docker-compose.yml:docker-compose.dev.yml
NODE_ENV=development
```

### Production

```
NODE_ENV=production
```

## Installation

```bash
yarn install
```

## Docker image build

```bash
yarn build
```

## Docker container start

```bash
yarn start
```
