import { Router } from "express";
import { ServerAliveController } from "../modules/donation/useCases/serverAlive/ServerAliveController";
import { alive } from "./alive.routes";
import { donation } from "./donation.routes";

const router = Router();

router.use(alive);
router.use(donation);

export { router };