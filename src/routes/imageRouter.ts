import express, { Request, Response } from 'express';
import multer from 'multer';
import { ENV } from '../env';

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, ENV.DOWNLOAD_FOLDER);
    },
    filename: (_req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

const imageRouter = express.Router();

imageRouter.post(
    '/',
    upload.single('image'),
    async (req: Request, res: Response) => {
        if (!req.file) {
            return res.status(400).json({
                error: 'Bad Request',
                message: 'No image was uploaded.'
            });
        }
        res.status(201).json({
            message: 'Image was uploaded successfully.'
        });
    }
);

imageRouter.get('/:fileName', async (req: Request, res: Response) => {
    const { fileName } = req.params;
    console.log('displaying image', fileName);
    res.sendFile(`${ENV.DOWNLOAD_FOLDER}/${fileName}`);
});

export default imageRouter;
