FROM node:7-alpine

WORKDIR /src

COPY package.json /src/package.json
RUN npm install
COPY . /src
CMD npm run start