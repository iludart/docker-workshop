FROM alpine:3.6

WORKDIR /client

RUN apk add --update nodejs nodejs-npm

COPY package.json ./

RUN npm install

CMD [ "npm", "start" ]