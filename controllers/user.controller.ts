import { Request, Response } from 'express'
import { responseOK } from '../utils/constants.utils';
import { sequelize } from '../database/database.provider';
const db = require("../models");
const User = db.User;

export async function findAllUsers(req: Request, res: Response) {
    try {
        sequelize.sync().then(() => {

        User.findAll().then(users => {
            return res.send({responseOK, users})
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