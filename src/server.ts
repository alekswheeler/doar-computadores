import express, { Request, Response, NextFunction} from "express";
import { AppError } from "./errors/AppError";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
  return res.json({alive: true});
});

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
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

app.listen(3000, ()=>{
  console.log("Server is running at http://localhost:3000");
});
