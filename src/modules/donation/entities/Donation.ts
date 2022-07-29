import { ICreateDonationDTO } from "../dtos/ICreateDonationDTO";

class Donation{

  name: string | undefined;
  email?: string;
  phone: string | undefined;
  zip: string| undefined;
  city: string| undefined;
  state: string | undefined;
  streetAddress: string| undefined;
  number: string | undefined;
  complement?: string;
  neighborhood: string | undefined;
  deviceCount: number| undefined;
  devices: [] | undefined

}

export { Donation }