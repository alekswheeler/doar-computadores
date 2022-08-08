import { Request, Response } from "express";
import { DevicesRepository } from "../../repositories/implementations/DevicesRepository";
import { ListDevicesUseCase } from "./listDevicesUseCase";

class ListDevicesController {

  async handle(req: Request, res: Response){
    const devicesReposiory = new DevicesRepository();
    const listDevicesUseCase = new ListDevicesUseCase(devicesReposiory);

    const devices = await listDevicesUseCase.execute();

    return res.status(200).json(devices);
  }
}


export { ListDevicesController }