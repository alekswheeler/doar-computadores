import { ICreateDonationDTO } from "../interfaces/ICreateDonationDTO";

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

  constructor (data: ICreateDonationDTO){
    //Something
  }

}

export { Donation }