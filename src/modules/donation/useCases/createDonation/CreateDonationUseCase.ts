import { AppError } from "../../../../errors/AppError";
import { ICreateDonationDTO } from "../../interfaces/ICreateDonationDTO";
import { IDevicesRepository } from "../../repositories/interfaces/IDevicesRepository";
import { IDonationRepository } from "../../repositories/interfaces/IDonationRepository";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

class CreateDonationUseCase{

  constructor(
    private usersRepository: IUsersRepository,
    private devicesRepository: IDevicesRepository,
    private donationsRepository: IDonationRepository
    ){}

  async execute({
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
  }: ICreateDonationDTO): Promise<void>{

    //Verifying required fields
    let requiredFields = [];
    if(!name){
      requiredFields.push("name");
    }
    if(!phone){
      requiredFields.push("phone");
    }
    if(!zip){
      requiredFields.push("zip");
    }
    if(!city){
      requiredFields.push("city");
    }
    if(!state){
      requiredFields.push("state");
    }
    if(!streetAddress){
      requiredFields.push("streetAddress");
    }
    if(!number){
      requiredFields.push("number");
    }
    if(!complement){
      requiredFields.push("complement");
    }
    if(!neighborhood){
      requiredFields.push("neighborhood");
    }
    if(!deviceCount){
      requiredFields.push("deviceCount");
    }
    if(!devices){
      requiredFields.push("devices");
    }

    if(requiredFields.length !== 0){
      throw new AppError({
        requiredFields,
        errorMessage: "Todos os campos obrigatórios devem ser informados."
      });
    }

    if(deviceCount !== devices.length){
      throw new AppError({
        errorMessage: "A quantidade de items informada está diferente da quantidade de items enviada."
      });
    }

    const userAlreadExists = await this.usersRepository.findByPhone(phone);
    let id = userAlreadExists?.id;

    //If user doesn't exists create a new user
    if(!userAlreadExists){
      try {
        const user = await this.usersRepository.save({
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
        });
        id = user.id;

      } catch (error) {
        console.log(error);
        throw new AppError({
          errorMessage: "Internal Server Error",
          statusCode: 500
        });
      }
    }else{
      try {
        //Update User info if user already exists
        await this.usersRepository.update({
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
        });
      } catch (error) {
        console.log(error);
        throw new AppError({
          errorMessage: "Internal Server Error",
          statusCode: 500
        });
      }
      
    }

    try {
      //Create Donation, with Date and User.id
      //When user don't exists, id is initialized with new user's id
      const donationId = await this.donationsRepository.save(id as string, deviceCount);

      //Saving all devices with Donation.id
      await this.devicesRepository.saveAll(devices, donationId);
    } catch (error) {
      console.log(error);
      throw new AppError({
        errorMessage: "Internal Server Error",
        statusCode: 500
      });
    }
    
  }
}

export { CreateDonationUseCase };