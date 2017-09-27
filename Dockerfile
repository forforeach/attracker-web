FROM node:8.4.0-alpine

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g create-react-app --silent

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm config set loglevel warn

RUN npm install --silent

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
