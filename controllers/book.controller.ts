import { Request, Response } from 'express'
import { responseNOTFOUND, responseOK } from '../utils/constants.utils';
import { sequelize } from '../database/database.provider';
const db = require("../models");
const Book = db.Book;

export async function findAllBooks(req: Request, res: Response) {
    try {
        sequelize.sync().then(() => {

        Book.findAll().then(books => {
            return res.status(responseOK).send({books})
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

export async function increaseReadings(req: Request, res: Response) {
    const requestPayload = req.body;
    console.log(requestPayload)
    try {
        sequelize.sync().then(() => {
            Book.increment('readingsNumber', { by: 1, where: { id: requestPayload.bookId, userId:requestPayload.userId }}).then(num => {
                console.log(num.flat(2))
                if (num.flat(2).pop() === 1) {
                    res.send({
                        message: `Book with id=${requestPayload.bookId} was updated successfully.`
                    });
                } else {
                    res.send({
                        message: `Cannot update Book with id=${requestPayload.bookId}. Maybe Book was not found`
                    });
                }
            }).catch((error) => {
                console.error('Failed to retrieve data : ', error);
                return res.status(responseNOTFOUND)
            });

        }).catch((error) => {
            console.error('Unable to findAll: ', error);
            return res.status(responseNOTFOUND)
        });

    }
    catch (e: any) {
        throw e;
    }
}

export async function removeFromCatalog(req: Request, res: Response) {
    const requestPayload = req.body;
    console.log(requestPayload)
    try {
        sequelize.sync().then(() => {
            Book.update({ cancellationDate: new Date()}, { where: { id: requestPayload.bookId, userId: requestPayload.userId }}).then(num => {
                console.log(num.flat(2))
                if (num.flat(2).pop() === 1) {
                    res.send({
                        message: `Book with id=${requestPayload.bookId} was updated successfully.`
                    });
                } else {
                    res.send({
                        message: `Cannot update Book with id=${requestPayload.bookId}. Maybe Book was not found`
                    });
                }
            }).catch((error) => {
                console.error('Failed to retrieve data : ', error);
                return res.status(responseNOTFOUND)
            });

        }).catch((error) => {
            console.error('Unable to findAll: ', error);
            return res.status(responseNOTFOUND)
        });

    }
    catch (e: any) {
        throw e;
    }
}