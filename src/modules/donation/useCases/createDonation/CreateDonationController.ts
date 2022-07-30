import { Request, Response } from "express";
import { CreateDonationUseCase } from "./CreateDonationUseCase";

class CreateDonationController{

  handle(req: Request, res: Response){

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
    
    return createDonationUseCase.execute({
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
  }

}


export { CreateDonationController }
