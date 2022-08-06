import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

interface IuserData{
  devices: [
    {
      type: string,
      condition: string
    }
  ];
  deviceCount: number;
}


function authenticateEmail (req: Request, res: Response, next: NextFunction) {

  const { email } = req.body;

  if(!email){
    // throw new AppError({
    //   errorMessage: "O campo email é obrigatório",
    //   statusCode: 400
    // });
    return next();
  }

  // Checking email address unsing RegExp
  const reg = /^[a-z0-9.]+@[a-z0-9]+\.com(\.[a-z0-9.]+)?$/;
  
  if(email){
    if(!reg.test(email)){
      throw new AppError({
        errorMessage: `O E-mail: ${email} é inválido.`
      });
    }
  }

  return next();
}


export { authenticateEmail };