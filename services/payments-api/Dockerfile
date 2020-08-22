FROM node:14.8.0-alpine3.10

ARG GITHUB_TOKEN
ENV GITHUB_TOKEN $GITHUB_TOKEN

WORKDIR /app

COPY package.json .npmrc ./
RUN yarn install
RUN rm -f .npmrc

COPY . .

CMD ["node", "src/app.js"]
