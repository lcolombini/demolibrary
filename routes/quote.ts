import express, { Request, Response, Router } from 'express';
import { responseOK } from '../utils/constants.utils';
import { testConnection } from '../controllers/test';
import { findAll } from '../controllers/book.controller';

const health = (router: Router) => {
    router.get('/-/health', async (req: Request, res: Response) => {
        return res.status(responseOK).send('OK');
    });
};
const book = (router: Router) => {
    router.get('/books/all', findAll);
};
const sample = (router: Router) => {
    router.get('/test', testConnection);
};

const router = express.Router();
health(router);
sample(router);
book(router)

export default router;