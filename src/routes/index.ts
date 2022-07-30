import { application, NextFunction, Router } from "express";
import { donation } from "./donation.routes";

const router = Router();

router.use(donation);

router.get("/", (req, res)=>{
  return res.json({alive: true});
});


export { router };