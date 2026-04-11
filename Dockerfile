# Use Node Alpine for lightweight image
FROM node:25-alpine

WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy source code (excluding node_modules and .next via .dockerignore)
COPY . .

# Expose Next.js dev port
EXPOSE 3000

# Environment variables for file watching
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=100

# Start Next.js dev server
CMD ["npm", "run", "dev"]