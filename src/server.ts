import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

import "express-async-errors";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err instanceof (AppError)){
    return res.status(err.statusCode).json({
      error: true,
      errorMessage: err.message
    });
  }

  return res.status(500).json({
    error: true,
    errorMessage: "Internal server error."
  });
});


app.listen(3000, ()=>{
  console.log("Server is running at http://localhost:3000");
});
