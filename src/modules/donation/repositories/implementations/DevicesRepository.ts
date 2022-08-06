import { appDataSource } from "../../../../databaseConnection";
import { Device } from "../../entities/Device";
import { IDevicesRepository } from "../interfaces/IDevicesRepository";

class DevicesRepository implements IDevicesRepository{

  private remoteRepository = appDataSource.getRepository(Device);

  //For each device use a function save and insert into database
  async saveAll(devices: Device[]): Promise<void> {
    devices.forEach(async (device)=>{
      await this.save(device.type as string, device.condition as string);
    })
  }

  async save(type: string, condition: string): Promise<void> {
    const device = this.remoteRepository.create({
      type,
      condition
    });

    await this.remoteRepository.save(device);
  }

  async list(): Promise<Device[]> {
    const devices = await this.remoteRepository.find();

    return devices;
  }
 
}

export { DevicesRepository }