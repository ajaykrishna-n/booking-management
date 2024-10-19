FROM node:18-alpine AS development


WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json

# RUN npm i -g yarn

RUN yarn install

COPY apps/notifications apps/notifications
COPY libs libs

RUN cd apps/notifications && yarn install

RUN yarn run build

FROM node:18-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./


# RUN npm i -g yarn
RUN yarn install --production

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/apps/notifications/main" ]
