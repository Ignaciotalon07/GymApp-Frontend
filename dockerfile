FROM node:22

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias (sin cache de npm opcionales)
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Copiar el resto del proyecto
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
