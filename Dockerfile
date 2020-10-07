FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888 8080 8000 80
CMD [ "node", "index.js" ]