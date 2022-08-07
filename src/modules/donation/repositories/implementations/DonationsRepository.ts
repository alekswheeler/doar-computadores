import { Repository } from "typeorm";
import { appDataSource } from "../../../../databaseConnection";
import { Donation } from "../../entities/Donation";
import { IDonationRepository } from "../interfaces/IDonationRepository";

class DonationsRepository implements IDonationRepository{

  private remoteRepository: Repository<Donation>;

  constructor(){
    this.remoteRepository = appDataSource.getRepository(Donation);
  }

  async save(userId: string, deviceCount: number): Promise<string> {
    const donation = this.remoteRepository.create({
      userId,
      quantity: deviceCount
    })

    await this.remoteRepository.save(donation);

    return donation.id;
  }

}

export { DonationsRepository }