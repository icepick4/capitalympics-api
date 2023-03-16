import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import { corsMiddleware } from './authMiddlewares';
import countryRouter from './routes/countryRouter';
import userRouter from './routes/userRouter';
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', corsMiddleware, userRouter);
app.use('/countries', corsMiddleware, countryRouter);

app.get('*', (_req, res) => {
    res.status(404).json({
        error: 'Not found',
        message:
            'Read the documentation : https://github.com/icepick4/capitalympics-api'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
