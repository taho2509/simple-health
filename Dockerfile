FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app/
RUN npm install --quiet --production

CMD [ "npm", "run", "start" ]
