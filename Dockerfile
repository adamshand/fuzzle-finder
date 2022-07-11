FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server/index.js" ]
<<<<<<< HEAD
=======

>>>>>>> d291c3930994668c1ba0f72962c48a979847d591
