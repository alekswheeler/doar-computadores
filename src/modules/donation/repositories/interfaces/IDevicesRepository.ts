import { Device } from "../../entities/Device";

interface IDevicesRepository{
  list(): Promise<Device[]>
  save(type: string, condition: string): Promise<void>
  saveAll(devices: Device[]): Promise<void>;
}

export { IDevicesRepository }