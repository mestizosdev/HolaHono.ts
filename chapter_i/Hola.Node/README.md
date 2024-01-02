# Hola REST API with Hono in TypeScript

## Content
- Simple REST API
- Read and write data in MariaDB

## Resources
- https://pnpm.io/installation

## Install dependencies
```
pnpm i
```

## Run
```
pnpm dev
```

## Docker Compose
```
docker-compose up -d
```
```
docker-compose down
```

## Docker
```
docker build -t node-hello .
```
```
docker run -d -p 3000:3000 --name hello --restart on-failure node-hello:latest
```

