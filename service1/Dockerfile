FROM node:alpine

COPY *.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]