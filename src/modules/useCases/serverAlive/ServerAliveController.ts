import { Request, Response } from "express";
import { ServerAliveUseCase } from "./ServerAliveUseCase";

class ServerAliveController{
  handle(req: Request, res: Response){
    const serverAliveUseCase = new ServerAliveUseCase();
    const obj = serverAliveUseCase.execute();

    return res.status(200).json(obj);
  }
}


export { ServerAliveController }