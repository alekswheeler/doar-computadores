import { Device } from "../../entities/Device";

interface IDevicesRepository{
  list(): Promise<Device[]>
  save(type: string, condition: string, donationId: string): Promise<void>
  saveAll(devices: Device[], donationId: string): Promise<void>;
}

export { IDevicesRepository }