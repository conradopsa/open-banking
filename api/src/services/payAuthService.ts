import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';

export default class PayAuthService {

    static async checkAuthViaPIX(data: any): Promise<Boolean> {
        return true;
    }

}