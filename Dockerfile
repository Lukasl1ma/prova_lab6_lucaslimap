FROM node:19.2.0
WORKDIR /app
COPY package*.json
RUN npm install
COPY src ./src
EXPOSE 8087
CMD["npm", "start"]
