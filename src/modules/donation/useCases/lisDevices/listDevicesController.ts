import { Request, Response } from "express";
import { ListDevicesUseCase } from "./listDevicesUseCase";

class ListDevicesController {

  async handle(req: Request, res: Response){
    const listDevicesUseCase = new ListDevicesUseCase();

    const devices = await listDevicesUseCase.execute();

    return res.status(200).json(devices);
  }
}


export { ListDevicesController }