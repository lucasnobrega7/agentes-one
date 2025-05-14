FROM node:20-alpine
RUN apk add --update libc6-compat python3 make g++
# needed for pdfjs-dist
RUN apk add --no-cache build-base cairo-dev pango-dev

# Install Chromium
RUN apk add --no-cache chromium

# Install curl for container-level health checks
RUN apk add --no-cache curl

# Install PNPM globally
RUN npm install -g pnpm

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV NODE_OPTIONS=--max-old-space-size=8192

# Set working directory
WORKDIR /app

# Copy package.json and related files first for better layer caching
COPY Flowise-main/package.json Flowise-main/pnpm-lock.yaml Flowise-main/pnpm-workspace.yaml Flowise-main/turbo.json ./

# Copy the rest of the application
COPY Flowise-main/ ./

# Install dependencies and build
RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]