FROM node:7-alpine

WORKDIR /src

COPY package.json /src/package.json
COPY typings.json /src/typings.json
RUN npm install
COPY . /src
CMD npm run start