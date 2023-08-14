import { Request, Response } from 'express'
import { responseOK } from '../utils/constants.utils';
import { sequelize } from '../database/database.provider';
const db = require("../models");
const Book = db.Book;

export async function findAll(req: Request, res: Response) {
    try {
        sequelize.sync().then(() => {

        Book.findAll().then(books => {
            return res.send({responseOK, books})
            }).catch((error) => {
                console.error('Failed to retrieve data : ', error);
            });

        }).catch((error) => {
            console.error('Unable to findAll: ', error);
        });

    }
    catch (e: any) {
        throw e;
    }
}