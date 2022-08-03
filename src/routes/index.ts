import { donation } from "./donation.routes";
import { Router } from "express";

const router = Router();

router.use(donation);

export { router };