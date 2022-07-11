# docker build -t fuzzler .
# echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
# docker push ghcr.io/OWNER/IMAGE_NAME:latest
# docker pull ghcr.io/OWNER/IMAGE_NAME
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server/index.js" ]
