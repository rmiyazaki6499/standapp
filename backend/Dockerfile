FROM python:3.7-alpine

RUN mkdir /app
WORKDIR /app

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

LABEL maintainer="Ryuichi Miyazaki <rmiyazaki11@ucsbalum.com>"

CMD ./start.sh 
