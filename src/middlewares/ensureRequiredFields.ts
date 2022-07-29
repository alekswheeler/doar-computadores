import { Request, Response, NextFunction } from "express";
import { Donation } from "../modules/donation/entities/Donation";

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
    return res.status(400).json(message);
  }

  // Checking email address unsing RegExp
  const reg = /^[a-z0-9.]+@[a-z0-9]+\.com(\.[a-z0-9.]+)?$/;
  if(!reg.test(email)){
    return res.status(400).json({
      error: true,
      errorMessage: `Email: ${email} is invalid.`
    });
  }
  
  
  return next();
}

export { ensureRequiredFields }