# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 16 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
# 
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM node:18-alpine as builder

CMD /bin/bash

ENV NODE_ENV build
WORKDIR /app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .
RUN npx prisma generate
RUN yarn build

# ---

FROM node:16-alpine

ENV NODE_ENV production

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/dist/ ./dist/
COPY --from=builder --chown=node:node /app/prisma ./prisma

# the prisma migration did not run
CMD ["npx", "prisma", "migrate", "deploy"]
CMD ["node", "dist/src/main.js"]