FROM node:20.10.0-alpine3.19

WORKDIR /app

COPY package.json .

COPY /dist .

RUN npm i

EXPOSE 3000

CMD [ "node", "app.js" ]