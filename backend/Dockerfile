FROM node:lts-alpine

# make the 'app' folder the current working directory
RUN mkdir -p /srv/app/school-server
WORKDIR /srv/app/school-server

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /srv/app/school-server

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /srv/app/school-server

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start"]