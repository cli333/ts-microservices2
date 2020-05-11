FROM node:alpine

WORKDIR /app

# need to copy everything, so has something to compile
COPY . .

RUN npm install --unsafe-perm --no-cache

CMD [ "npm", "run", "dev" ]