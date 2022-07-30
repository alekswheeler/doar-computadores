import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

interface IuserData{
  devices: [
    {
      type: "notebook" | "desktop" | "netbook" | "screen" | "printer" | "scanner",
      condition: "working" | "notWorking" | "broken"
    }
  ];
  deviceCount: number;
}


function ensureDevices (req: Request, res: Response, next: NextFunction) {
  const { devices, deviceCount }: IuserData = req.body;

  devices.forEach(device => {
    switch (device.type) {
      case "notebook":
      case "desktop":
      case "netbook":
      case "screen":
      case "printer":
      case "scanner":
        break;
      default:
        throw new AppError(`Aparelhos do tipo (${device.type}) não são aceitos.`);
    }

    switch (device.condition) {
      case "working":
      case "notWorking":
      case "broken":
        break;
      default:
        throw new AppError(`Estado de aparelho (${device.condition}) desconhecido.`);
    }
  });

  if(deviceCount !== devices.length){
    throw new AppError(`A quantidade de equipamentos (${deviceCount}) não está de acordo com as informações de equipamentos enviados (${devices.length}).`);
  }

  return next();
}


export { ensureDevices };