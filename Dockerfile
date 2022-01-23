FROM node:14
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY ./build .
CMD [ "node", "index.js" ]