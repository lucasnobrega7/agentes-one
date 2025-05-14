FROM node:20-alpine

# Install necessary packages
RUN apk add --update libc6-compat python3 make g++
RUN apk add --no-cache build-base cairo-dev pango-dev
RUN apk add --no-cache chromium
RUN apk add --no-cache curl

# Install PNPM globally
RUN npm install -g pnpm

# Environment variables
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV NODE_OPTIONS=--max-old-space-size=8192

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY app-root/package.json ./
COPY app-root/pnpm-lock.yaml ./
COPY app-root/pnpm-workspace.yaml ./
COPY app-root/turbo.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the app
COPY app-root ./

# Build the app
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]