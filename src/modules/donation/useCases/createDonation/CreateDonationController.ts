import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { DevicesRepository } from "../../repositories/implementations/DevicesRepository";
import { DonationsRepository } from "../../repositories/implementations/DonationsRepository";
import { UsersRepository } from "../../repositories/implementations/UserRepositories";
import { CreateDonationUseCase } from "./CreateDonationUseCase";

class CreateDonationController{

  async handle(req: Request, res: Response): Promise<Response>{

    const {
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
    } = req.body;

    const usersRepository = new UsersRepository();
    const devicesRepository = new DevicesRepository();
    const donationsRepository = new DonationsRepository();

    const createDonationUseCase = new CreateDonationUseCase(usersRepository, devicesRepository, donationsRepository);  

    try{
      await createDonationUseCase.execute({
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
      return res.status(200).json({
        succes: true
      });
    } catch(err){
      if(err instanceof (AppError)){
        return res.status(err.statusCode).json({
          error: true,
          errorMessage: err.errorMessage,
          requiredFields: err.requiredFields
        });
      }
    
      return res.status(500).json({
        error: true,
        errorMessage: "Internal server error."
      });
    }

  }

}


export { CreateDonationController }
