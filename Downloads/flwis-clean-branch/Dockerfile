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

# Debug - show working directory
RUN pwd && ls -la

# Copy entire project
COPY . .

# Debug - show files after copy
RUN pwd && ls -la

# Navigate to Flowise-main directory and install packages
WORKDIR /app/Flowise-main

# Debug - show files in Flowise-main
RUN pwd && ls -la

# Install dependencies and build
RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]