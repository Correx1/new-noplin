# Stage 1: Dependencies
FROM node:20.19-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Stage 2: Builder
FROM node:20.19-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ARG NEXT_PUBLIC_SANITY_PROJECT_ID
ARG NEXT_PUBLIC_SANITY_DATASET
ARG SANITY_API_READ_TOKEN

ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV SANITY_API_READ_TOKEN=$SANITY_API_READ_TOKEN

RUN npm run build

# Stage 3: Runner
FROM node:20.19-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start"]
