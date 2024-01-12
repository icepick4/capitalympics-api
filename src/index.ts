import bodyParser from 'body-parser';
import express, { Errback, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { ENV } from './env';
import { AuthMiddleware, CORSMiddleware } from './utils/authMiddlewares';

import continentRouter from './routes/continentRouter';
import countryRouter from './routes/countryRouter';
import userRouter from './routes/userRouter';

import questionRouter from './routes/questionRouter';
import regionRouter from './routes/regionRouter';
import scoreRouter from './routes/scoreRouter';
import securityRouter from './routes/securityRouter';

const app = express();
const cors = require('cors');

app.use(cors());
app.use(CORSMiddleware);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', securityRouter);
app.use('/api/continents', continentRouter);
app.use('/api/countries', countryRouter);
app.use('/api/questions', AuthMiddleware, questionRouter);
app.use('/api/regions', regionRouter);
app.use('/api/scores', AuthMiddleware, scoreRouter);
app.use('/api/users', userRouter);

app.get('*', (_req: Request, res: Response) => {
    res.status(404).json({
        error: 'Not found',
        message:
            'Read the documentation: https://github.com/icepick4/capitalympics-api'
    });
});

// Gestionnaire d'erreurs global
app.use((err: Errback, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);

    res.status(500).json({
        error: 'Internal Server Error',
        message: 'Something went wrong. Please try again later.'
    });
});

const startServer = (): void => {
    app.listen(ENV.PORT, () => {
        console.log(`Server is running on http://localhost:${ENV.PORT}/api`);
    });
};

startServer();
