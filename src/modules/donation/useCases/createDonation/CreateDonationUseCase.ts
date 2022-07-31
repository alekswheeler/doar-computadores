import { AppError } from "../../../../errors/AppError";
import { Donation } from "../../entities/Donation";
import { ICreateDonationDTO } from "../../interfaces/ICreateDonationDTO";

class CreateDonationUseCase{

  execute({
    name,
    email,
    phone,
    zip,
    city,
    state,
    streetAddress,
    number,
    complement,
    neighborhood,
    deviceCount,
    devices
  }: ICreateDonationDTO){

    const donation = new Donation({
      name,
      email,
      phone,
      zip,
      city,
      state,
      streetAddress,
      number,
      complement,
      neighborhood,
      deviceCount,
      devices
    });

    return {
      succes: true
    }
  }
}


export { CreateDonationUseCase };