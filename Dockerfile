# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md

FROM node:18-alpine

EXPOSE 8080

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Copy files from host to container
COPY ./ ./

RUN ls -al

CMD [ "npm", "start" ]
