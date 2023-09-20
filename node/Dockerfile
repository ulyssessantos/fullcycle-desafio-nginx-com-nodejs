FROM node:20

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY ./package*.json ./server.js ./

RUN rm -rf node_modules

RUN rm -f package-lock.json

RUN npm cache clean --force

RUN npm install --verbose

CMD ["npm","init"]