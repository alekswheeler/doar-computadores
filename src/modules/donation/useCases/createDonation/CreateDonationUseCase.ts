import { ICreateDonationDTO } from "../../dtos/ICreateDonationDTO";
import { Donation } from "../../entities/Donation";

class CreateDonationUseCase{

  execute(data: ICreateDonationDTO){

    const donation = new Donation(data);

    return {
      succes: true
    }
  }
}


export { CreateDonationUseCase };