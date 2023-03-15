FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.example /app/.env


EXPOSE 3000

ENV PORT=${PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_USER=${DB_USER}
ENV DB_PWD=${DB_PWD}
ENV DB_NAME=${DB_NAME}
ENV JWT_TOKEN=${JWT_TOKEN}

CMD ["npm", "run", "start"]