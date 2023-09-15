FROM node:12.22.12-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force --loglevel verbose

WORKDIR /app
COPY . .
RUN node_modules/.bin/ng build -c production
