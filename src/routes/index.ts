import express, { Request, Response, NextFunction} from "express";
import { donation } from "./donation.routes";
import "express-async-errors";
import { AppError } from "../errors/AppError";

const router = express();

router.use(express.json());

router.use(donation);

router.get("/", (req, res)=>{
  return res.json({alive: true});
});

router.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
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
});

export { router };