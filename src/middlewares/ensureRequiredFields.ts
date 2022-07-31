import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

function ensureRequiredFields (req: Request, res: Response, next: NextFunction) {

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

  const fields = [];

  if(!name){
    fields.push("name");
  }
  if(!phone){
    fields.push("phone");
  }
  if(!zip){
    fields.push("zip");
  }
  if(!state){
    fields.push("state");
  }
  if(!city){
    fields.push("city");
  }
  if(!streetAddress){
    fields.push("streetAddress");
  }
  if(!number){
    fields.push("number");
  }
  if(!neighborhood){
    fields.push("neighborhood");
  }
  if(!deviceCount){
    fields.push("deviceCount");
  }
  if(!devices){
    fields.push("devices");
  }

  const message = {
    error: true,
    requiredFields: fields,
    errorMessage: "Todos os campos obrigatórios devem ser informados"
  }

  if(fields.length !== 0){
    throw new AppError(message);
  }

  // Checking email address unsing RegExp
  const reg = /^[a-z0-9.]+@[a-z0-9]+\.com(\.[a-z0-9.]+)?$/;
  if(email){
    if(!reg.test(email)){
      throw new AppError({
        errorMessage: `Email: ${email} is invalid.` 
      });
    }
  }

  //Checking phoneNumber

  if(phone.length !== 11){
    throw new AppError({
      errorMessage: `O número de telefone precisa ter o fomato DD123456789`
    });
  }
  
  return next();
}

export { ensureRequiredFields }