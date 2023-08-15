FROM alpine:3.18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build