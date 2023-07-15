FROM node:18

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY . .
COPY .env.example /app/.env

RUN npm install
RUN npm run build

ENV PORT=${PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_USER=${DB_USER}
ENV DB_PWD=${DB_PWD}
ENV DB_NAME=${DB_NAME}
ENV JWT_TOKEN=${JWT_TOKEN}
ENV NODE_ENV=production

FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY --from=0 /app/dist ./dist
COPY --from=0 /app/.env ./.env

RUN npm install pm2 -g

EXPOSE 3001

CMD ["pm2-runtime", "dist/main.js"]
