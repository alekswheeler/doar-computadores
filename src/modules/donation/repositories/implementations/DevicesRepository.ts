import { appDataSource } from "../../../../databaseConnection";
import { Device } from "../../entities/Device";
import { IDevicesRepository } from "../interfaces/IDevicesRepository";

class DevicesRepository implements IDevicesRepository{

  private remoteRepository = appDataSource.getRepository(Device);

  //Save all devices in database
  async saveAll(devices: Device[], donationId: string): Promise<void> {
    devices.forEach(async (device)=>{

      const d = this.remoteRepository.create({
        type: device.type,
        condition: device.condition,
        donationId: donationId
      });

      this.remoteRepository.save(d);
    })
  }

  async save(type: string, condition: string, donationId: string): Promise<void> {
    const device = this.remoteRepository.create({
      type,
      condition,
      donationId
    });

    await this.remoteRepository.save(device);
  }

  async list(): Promise<Device[]> {
    const devices = await this.remoteRepository.find();
    return devices;
  }
 
}

export { DevicesRepository }