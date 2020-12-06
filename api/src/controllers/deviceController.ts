import { Request, Response } from 'express';
import Device from "../models/device";
import { responseError500 } from "../utils/serviceResponse";

export default class DeviceController {
    static async listDevices(request: Request, response: Response) {

        try {

            const devicesList = await Device.findAll();
            response.json(devicesList);

        } catch (error) {
            responseError500(error, response);
        }

    }
}