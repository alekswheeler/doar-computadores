import { Device } from "../../entities/Device";
import { IDevicesRepository } from "../interfaces/IDevicesRepository";

class inMemoryDevicesRepository  implements IDevicesRepository{


  devices: Device[];

  constructor(){
    this.devices = [];
  }

  async list(): Promise<Device[]> {
    return this.devices;
  }

  async save(type: string, condition: string, donationId: string): Promise<void> {
    const device = new Device();
    device.donationId = donationId;

    this.devices.push(device);
  }

  async saveAll(devices: Device[], donationId: string): Promise<void> {
    devices.forEach((device)=>{
      device.donationId = donationId;
      this.devices.push(device);
    });
  }

}

export { inMemoryDevicesRepository }