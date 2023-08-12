import express, { Request, Response, Router } from 'express';
import { responseOK } from '../src/utils/constants.utils';

const health = (router: Router) => {
    router.get('/-/health', async (req: Request, res: Response) => {
        return res.status(responseOK).send('OK');
    });
};


const router = express.Router();
health(router);

export default router;