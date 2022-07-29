import { Request, Response } from "express";

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

    const obj = {
      succes: true
    }
    return res.json(obj);
  }

}


export { CreateDonationController }
