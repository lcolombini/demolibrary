import express, { Request, Response, Router } from 'express';
import { responseOK } from '../src/utils/constants.utils';
import { testConnection } from '../src/controllers/test';

const health = (router: Router) => {
    router.get('/-/health', async (req: Request, res: Response) => {
        return res.status(responseOK).send('OK');
    });
};
const sample = (router: Router) => {
    router.get('/test', testConnection);
};

const router = express.Router();
health(router);
sample(router)

export default router;