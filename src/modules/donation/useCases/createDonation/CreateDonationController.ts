import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
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

    const createDonationUseCase = new CreateDonationUseCase();  

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
    } catch(err){
      if(err instanceof AppError)
      return res.status(err.statusCode).json({
        errrorMessage: err.errorMessage
      });
    }

    return res.status(200).json({
      succes: true
    });
  }

}


export { CreateDonationController }
