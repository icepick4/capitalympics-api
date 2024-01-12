FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env.example /app/.env
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npm run build

ENV PORT=${PORT}
ENV DATABASE_URL=${DATABASE_URL}
ENV JWT_TOKEN=${JWT_TOKEN}
ENV NODE_ENV=production

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.env ./.env
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

RUN npm install pm2 -g
RUN mkdir -p /app/images

EXPOSE 3001

CMD ["pm2-runtime", "dist/src/index.js"]
