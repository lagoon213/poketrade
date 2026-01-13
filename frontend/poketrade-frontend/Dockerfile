FROM node:20-alpine

WORKDIR /app

# pak dependencies
COPY package*.json ./
RUN npm install

# kopieer broncode
COPY . .

# build
RUN npm run build

# run command
EXPOSE 3000
CMD ["npm", "run", "preview"]
