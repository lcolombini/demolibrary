import { Request, Response } from 'express'
import { responseNOTFOUND, responseOK } from '../utils/constants.utils';
import { sequelize } from '../database/database.provider';
const db = require("../models");
const User = db.User;
const Book = db.Book

export async function findAllUsers(req: Request, res: Response) {
    try {
        sequelize.sync().then(() => {

        User.findAll().then(users => {
            return res.status(responseOK).send({ users })
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

export async function findByEmail(req: Request, res: Response) {
    const requestPayload = req.body;
    try {
        sequelize.sync().then(() => {

            User.findOne({ where: { email: requestPayload.email } }).then(user => {
                return res.status(responseOK).send({ user })
            }).catch((error) => {
                console.error('Failed to retrieve data : ', error);
            });

        }).catch((error) => {
            console.error('Unable to findOne: ', error);
        });

    }
    catch (e: any) {
        throw e;
    }
}
export async function bookList(req: Request, res: Response) {
    const requestPayload = req.params;
    try {
        sequelize.sync().then(() => {
            User.findByPk(requestPayload.id, {include: Book}).then(user => {
                if (user) {
                    return res.status(responseOK).send(JSON.stringify({ user, Book }))
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