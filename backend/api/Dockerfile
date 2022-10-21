FROM node:16.16.0-slim

WORKDIR /usr/app/src

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]