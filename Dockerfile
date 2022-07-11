# docker build  -t ghcr.io/adamshand/fuzzler
# echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
# docker push ghcr.io/adamshand/fuzzler:latest
# docker pull ghcr.io/adamshand/fuzzler

FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server/index.js" ]
