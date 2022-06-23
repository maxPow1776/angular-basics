FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

COPY [ "Dockerfile", "animals.routes.js", "server.js", ".env", "."]
COPY public ./public
COPY models ./models

# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/public /usr/share/nginx/html

EXPOSE 8080
CMD [ "node", "server.js" ]