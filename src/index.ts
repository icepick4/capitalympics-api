import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import countryRouter from './routes/countryRouter';
import userRouter from './routes/userRouter';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/countries', countryRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
