import express, { Request, Response, Router } from 'express';
import { responseOK } from '../utils/constants.utils';
import { bookList, findAllUsers } from '../controllers/user.controller';
import { findAllBooks } from '../controllers/book.controller';
const health = (router: Router) => {
    router.get('/-/health', async (req: Request, res: Response) => {
        return res.status(responseOK).send('OK');
    });
};
const book = (router: Router) => {
    router.get('/books/all', findAllBooks);
};

const user = (router: Router) => {
    router.get('/users/all', findAllUsers);
    router.get('/users/:id/books', bookList)
};
const router = express.Router();
health(router);
book(router)
user(router)

export default router;