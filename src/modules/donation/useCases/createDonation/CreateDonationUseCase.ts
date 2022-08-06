import { AppError } from "../../../../errors/AppError";
import { Donation } from "../../entities/Donation";
import { ICreateDonationDTO } from "../../interfaces/ICreateDonationDTO";
import { DevicesRepository } from "../../repositories/implementations/DevicesRepository";
import { UsersRepository } from "../../repositories/implementations/UserRepositories";
import { IDevicesRepository } from "../../repositories/interfaces/IDevicesRepository";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

class CreateDonationUseCase{

  private usersRepository: IUsersRepository
  private devicesRepository: IDevicesRepository;

  constructor(){
    this.usersRepository = new UsersRepository();
    this.devicesRepository = new DevicesRepository();
  }

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

    const userAlreadExists = await this.usersRepository.findByPhone(phone);

    if(!userAlreadExists){
      // Create and save user in usersRepository
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
      } catch (error) {
        console.log(error);
        throw new AppError({
          statusCode: 500,
          errorMessage: "Error on saving data"
        });
      }
    }

    //Salvar os devices
    try {
      await this.devicesRepository.saveAll(devices);
    } catch (error) {
      console.log(error);

      throw new AppError({
        statusCode: 500,
        errorMessage: "Error on saving data"
      });
    }

    //Registrar na tabela de doações
    
  }
}


export { CreateDonationUseCase };