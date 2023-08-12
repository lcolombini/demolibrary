import { Request, Response } from 'express'
import { responseOK } from '../utils/constants.utils';
import { sequelize } from '../database/database.provider';

export async function testConnection(req: Request, res: Response) {
    try {
        let message:string;
        try {
            await sequelize.authenticate();
            message = 'Connection has been established successfully.';
        } catch (error) {
            message = 'Unable to connect to the database:' + error;
        }
        const response = { message: 'OK', body: message };
        return res.status(responseOK).json(response);
    }
    catch (e: any) {
        throw e;
    }
}