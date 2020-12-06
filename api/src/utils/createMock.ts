import Device from "../models/device";
import User from "../models/user";

export async function createUserMock(attributes: any) {

    if (await User.findOne({where: attributes})){
        console.log("Mock já existente")
        return;
    }        

    const mock = await User.build(attributes);

    await mock.save();

}

export async function createDeviceMock(attributes: any) {

    if (await Device.findOne({where: attributes})){
        console.log("Mock já existente")
        return;
    }        

    const mock = await Device.build(attributes);

    await mock.save();

}