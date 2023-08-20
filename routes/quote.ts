import express, { Request, Response, Router } from 'express';
import { responseOK } from '../utils/constants.utils';
import { bookList, findAllUsers, findByEmail } from '../controllers/user.controller';
import { findAllBooks, increaseReadings, removeFromCatalog } from '../controllers/book.controller';
const health = (router: Router) => {
    router.get('/-/health', async (req: Request, res: Response) => {
        return res.status(responseOK).send('OK');
    });
};
const book = (router: Router) => {
    router.get('/api/v1/books/all', findAllBooks);
    router.put('/api/v1/books/increaseReadings', increaseReadings);
    router.put('/api/v1/books/removeFromCatalog', removeFromCatalog);
};

const user = (router: Router) => {
    router.get('/api/v1/users/all', findAllUsers);
    router.post('/api/v1/users/login', findByEmail);
    router.get('/api/v1/users/:id/books', bookList)
};
const router = express.Router();
health(router);
book(router)
user(router)

export default router;