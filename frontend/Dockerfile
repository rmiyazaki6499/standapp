FROM node:12.18-alpine3.9

RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN npm install --silent 
RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200

LABEL maintainer="Ryuichi Miyazaki <rmiyazaki11@ucsbalum.com>"

CMD ./node_modules/.bin/ng serve --host 0.0.0.0
