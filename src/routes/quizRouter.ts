import express, { Request, Response } from 'express';
import prisma from '../prisma';

const quizRouter = express.Router();

quizRouter.get('/quiz', async (_req: Request, res: Response) => {
    const quiz = await prisma.quiz.findMany();
    res.json(quiz);
});

quizRouter.post('/', async (req: Request, res: Response) => {
    const { name, description, theme, difficulty, questions } = req.body;
    const userId = parseInt(req.app.get('auth').id);
    const quiz = await prisma.quiz.create({
        data: {
            name,
            description,
            theme,
            difficulty,
            user_id: userId,
            questions: {
                create: questions
            }
        }
    });
    res.json(quiz);
});

quizRouter.post('/result', async (req: Request, res: Response) => {
    const { quiz_id, score } = req.body;
    const userId = parseInt(req.app.get('auth').id);
    const result = await prisma.quizResult.create({
        data: {
            user_id: userId,
            quiz_id,
            result: score
        }
    });

    if (result) {
        res.json({ success: true });
    }
    res.json({ success: false });
});

export default quizRouter;
