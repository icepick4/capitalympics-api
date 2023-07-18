import bodyParser from 'body-parser';
import express, { Errback, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { ENV } from './env';

import continentRouter from './routes/continentRouter';
import countryRouter from './routes/countryRouter';
import userRouter from './routes/userRouter';

import securityRouter from './routes/securityRouter';
import { corsMiddleware } from './utils/authMiddlewares';

const app = express();
const cors = require('cors');

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', corsMiddleware, securityRouter);
app.use('/api/users', corsMiddleware, userRouter);
app.use('/api/continents', corsMiddleware, continentRouter);
app.use('/api/countries', corsMiddleware, countryRouter);

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
        console.log(`Server is running on http://localhost:${ENV.PORT}`);
    });
};

// const restartServer = (): void => {
//     console.log('Restarting server...');
//     startServer();
// };

startServer();

// process.on('uncaughtException', (err: Error) => {
//     console.error('Uncaught Exception:', err);
//     restartServer();
// });

// process.on(
//     'unhandledRejection',
//     (reason: unknown, _promise: Promise<unknown>) => {
//         console.error('Unhandled Rejection:', reason);
//         restartServer();
//     }
// );
