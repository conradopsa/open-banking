import { responseError500, responseError404 } from './../utils/serviceResponse';
import { Request, Response } from 'express';
import User from '../models/user';
import { checkInstance } from '../utils/sequelizeUtils';
import PayAuthService from '../services/payAuthService';
import Device from '../models/device';

const USER_NOT_FOUND = "User not found";
const DEVICE_NOT_FOUND = "Device not found";


const sequelize = () => checkInstance(User.sequelize)

export default class PayAuthController {

    static async requestAuthentication(request: Request, response: Response) {

        try {
            const { userId, deviceSN } = request.params;
            const user = await User.findByPk(userId);
            const device = await Device.findByPk(deviceSN);

            if (user === undefined || user === null)
                return responseError404(response, USER_NOT_FOUND);

            if (device === undefined || device === null)
                return responseError404(response, DEVICE_NOT_FOUND);


            //Verificar autenticação via pagamento instantâneo
            const accessGranted = true //await PayAuthService.checkAuthViaPIX()
            
            if (!accessGranted){
                response.status(401).json("Acesso negado.");
            }
            
            //Conceder Acesso
            device.status = true;
            await device.save();
            
            response.send("Acesso concedido!");
            
        } catch (error) {
            responseError500(error, response);
        }

    }

    static async devicesStatus(request: Request, response: Response) {

        try {
            const { deviceSN } = request.params;
            const device = await Device.findByPk(deviceSN);

            console.log(device)
            response.json({status: device?.status});

        } catch (error) {
            responseError500(error, response);
        }

    }

}