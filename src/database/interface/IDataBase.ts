import { IDevice } from "../../modules/donation/interfaces/IDevices";

interface IDataBase{

  saveDevices(devices: IDevice, email: string): Promise<void>;
  findByEmail(email: string): Promise<void>;
  list(): Promise<[]>
}


export { IDataBase };