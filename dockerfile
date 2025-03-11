# Koristi zvaničnu Node.js sliku
FROM node:18-alpine

# Postavi radni direktorijum unutar kontejnera
WORKDIR /

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install

# Kopiraj ostatak aplikacije
COPY . .

# Ekspoziraj port aplikacije
EXPOSE 3000

# Pokreni aplikaciju
CMD ["npm", "start"]