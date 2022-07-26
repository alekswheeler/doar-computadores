import { Device } from "../entities/Device";

interface ICreateDonationDTO{
  name: string;
  email?: string,
  phone: string,
  zip: string,
  city: string,
  state: string,
  streetAddress: string,
  number: string,
  complement?: string,
  neighborhood: string,
  deviceCount:number,
  devices: Device[]
}

export { ICreateDonationDTO }