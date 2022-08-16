
FROM node:18-alpine3.15
WORKDIR /app
COPY . .
RUN rm -r node_modules
RUN npm install  
RUN npm install -g npm@8.17.0
CMD ["npm","test"]
