import { Donation } from "../../entities/Donation";
import { IDonationRepository } from "../interfaces/IDonationRepository";

class inMemoryDontaionsRepository implements IDonationRepository{

  donations: Donation[];

  constructor(){
    this.donations = [];
  }

  async save(userId: string, deviceCount: number): Promise<string> {
    const donation = new Donation(userId);
    donation.quantity = deviceCount;

    this.donations.push(donation);

    return donation.id;
  }
  
}


export { inMemoryDontaionsRepository }