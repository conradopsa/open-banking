import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';
import User from '../models/user';
import { CreateOptions, FindOptions, Op } from 'sequelize';
import { checkInstance } from '../utils/sequelizeUtils';

const USER_NOT_FOUND = "User not found";
const UNDEFINED_ACCOUNT = 'Undefined account';
const WRONG_PASSWORD = 'Password does not match';

const sequelize = () => checkInstance(User.sequelize)

export default class UserController {

    static async getUser(request: Request, response: Response) {

        try {
            const { id } = request.params;
            const user = await User.findByPk(id);

            if (!user)
                return responseError404(response, USER_NOT_FOUND);

            response.json(user);
        } catch (error) {
            responseError500(error, response);
        }

    }

    static async listUsers(request: Request, response: Response) {

        try {

            const usersList = await User.findAll();
            response.json(usersList);

        } catch (error) {
            responseError500(error, response);
        }

    }

    static async login(request: Request, response: Response) {

        try {
            const { account, password } = request.body;

            if (account === undefined)
                return response.status(400).send(UNDEFINED_ACCOUNT);

            const queryOptions: FindOptions<User> = { where: { account: account } }

            const user = await User.scope('login').findOne(queryOptions);

            if (!user)
                return responseError404(response, USER_NOT_FOUND);

            const passIsEquals = password === user.password;

            if (!passIsEquals)
                return response.status(401).send(WRONG_PASSWORD);

            response.send(user);
        } catch (error) {
            responseError500(error, response);
        }

    }

}