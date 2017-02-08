FROM node:7-alpine

WORKDIR /src

COPY package.json /src/package.json
COPY typings.json /src/typings.json
RUN npm install && npm run postinstall
COPY . /src
CMD npm run start