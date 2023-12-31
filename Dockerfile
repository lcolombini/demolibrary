FROM node:lts-alpine

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./
COPY config/config.js config/

RUN apk update && apk add bash
RUN npm install
RUN npm install ts-node
RUN npm install tsconfig.json
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]