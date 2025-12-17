# Stage 1: Build Frontend
FROM node:18-alpine as build
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Setup Backend and Serve
FROM node:18-alpine
WORKDIR /app/server

# Copy backend package files
COPY server/package*.json ./

# Install backend dependencies
RUN npm install --production

# Copy backend source code
COPY server/ ./

# Copy built frontend assets from build stage
# The backend is configured to serve from ../dist
COPY --from=build /app/dist ../dist

EXPOSE 3000

CMD ["node", "index.js"]
