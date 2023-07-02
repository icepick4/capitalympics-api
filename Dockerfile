FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .
COPY .env.example /app/.env


EXPOSE 3001

ENV PORT=${PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_USER=${DB_USER}
ENV DB_PWD=${DB_PWD}
ENV DB_NAME=${DB_NAME}
ENV JWT_TOKEN=${JWT_TOKEN}
ENV NODE_ENV=production

CMD ["npm", "run", "start"]