import { Device } from "../../entities/Device";
import { DevicesRepository } from "../../repositories/implementations/DevicesRepository"

class ListDevicesUseCase{

  private devicesRepository = new DevicesRepository();

  async execute(): Promise<Device[]>{
    return await this.devicesRepository.list();
  }

}

export { ListDevicesUseCase }