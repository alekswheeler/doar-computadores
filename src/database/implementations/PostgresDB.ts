import { IDevice } from "../../modules/donation/interfaces/IDevices";
import { IDataBase } from "../interface/IDataBase";

class PostgresDB implements IDataBase{
  saveDevices(devices: IDevice, email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<[]> {
    throw new Error("Method not implemented.");
  }
  
}