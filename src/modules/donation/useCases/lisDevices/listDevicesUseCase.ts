import { Device } from "../../entities/Device";
import { IDevicesRepository } from "../../repositories/interfaces/IDevicesRepository";

class ListDevicesUseCase{

  constructor(private devicesRepository: IDevicesRepository){}

  async execute(): Promise<Device[]>{
    return await this.devicesRepository.list();
  }

}

export { ListDevicesUseCase }