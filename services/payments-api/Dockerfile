FROM node:14.8.0-alpine3.10
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
CMD ["node", "src/app.js"]