# Install dependencies only when needed
FROM node:18-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy root configuration
COPY package.json package-lock.json turbo.json ./
# Copy workspace packages
COPY apps/docs/package.json ./apps/docs/package.json
COPY packages/interpreter/package.json ./packages/interpreter/package.json
COPY packages/parser/package.json ./packages/parser/package.json
COPY packages/config/package.json ./packages/config/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the project using Turbo
RUN npx turbo run build --filter=boss-lang-docs

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 8080

# You only need to copy the build output and necessary files
COPY --from=builder /app/apps/docs/next.config.js ./
COPY --from=builder /app/apps/docs/public ./public
COPY --from=builder /app/apps/docs/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/docs/package.json ./package.json

# Add a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 8080

# Start the application
CMD ["npm", "start"]
